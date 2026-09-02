import { useEffect, useState } from "react";

/*
 * Poster thumbnail imports
 *
 * These should use the SAME WebP files
 * used by PosterArchive.
 *
 * Adjust the import paths only if your
 * exact folder structure differs.
 */

import messiThumbnail from "../assets/img/posters/thumbnails/messi.webp";

import mrVengeanceThumbnail from "../assets/img/posters/thumbnails/mr-vengeance.webp";
import oldboyThumbnail from "../assets/img/posters/thumbnails/oldboy.webp";
import ladyVengeanceThumbnail from "../assets/img/posters/thumbnails/lady-vengeance.webp";

import heIsTheLightThumbnail from "../assets/img/posters/thumbnails/he-is-the-light.webp";

import boysDontCryThumbnail from "../assets/img/posters/thumbnails/boys-dont-cry.webp";

import spiderverseThumbnail from "../assets/img/posters/thumbnails/spiderverse.webp";

import mrMoraleThumbnail from "../assets/img/posters/thumbnails/mr-morale.webp";
import vettelThumbnail from "../assets/img/posters/thumbnails/vettel.webp";


export default function usePageLoader() {

  /*
   * Show the full site loading screen only
   * once per browser session.
   *
   * This prevents:
   *
   * Home → Project → Home
   *
   * from triggering the entire loading screen again.
   */

  const [isLoading, setIsLoading] =
    useState(() => {

      return (
        sessionStorage.getItem(
          "freddy-site-loaded"
        ) !== "true"
      );

    });


  useEffect(() => {

    let mounted = true;


    /*
     * If the site has already completed its
     * initial loading during this browser session,
     * immediately show the page.
     */

    if (
      sessionStorage.getItem(
        "freddy-site-loaded"
      ) === "true"
    ) {

      setIsLoading(false);

      return;

    }


    const waitForImages = async () => {

      const images =
        Array.from(
          document.querySelectorAll("img")
        );


      await Promise.all(

        images.map((image) => {

          /*
           * Image is already loaded
           */

          if (image.complete) {
            return Promise.resolve();
          }


          /*
           * Wait until image loads
           * or fails to load
           */

          return new Promise(
            (resolve) => {

              const finish = () =>
                resolve();


              image.addEventListener(
                "load",
                finish,
                { once: true }
              );


              image.addEventListener(
                "error",
                finish,
                { once: true }
              );

            }
          );

        })

      );

    };


    /*
     * Explicitly preload all PosterArchive
     * thumbnail WebPs.
     *
     * This is necessary because some poster
     * groups are not mounted until clicked.
     */

    const preloadPosterThumbnails = async () => {

      const thumbnails = [

        messiThumbnail,

        mrVengeanceThumbnail,
        oldboyThumbnail,
        ladyVengeanceThumbnail,

        heIsTheLightThumbnail,

        boysDontCryThumbnail,

        spiderverseThumbnail,

        mrMoraleThumbnail,
        vettelThumbnail,

      ];


      await Promise.all(

        thumbnails.map(
          (src) =>

            new Promise(
              (resolve) => {

                const image =
                  new Image();


                image.onload =
                  () => resolve();


                image.onerror =
                  () => resolve();


                image.src =
                  src;

              }
            )

        )

      );

    };


    const loadSite = async () => {

      try {

        /*
         * Wait for browser document
         */

        if (
          document.readyState !==
          "complete"
        ) {

          await new Promise(
            (resolve) => {

              window.addEventListener(
                "load",
                resolve,
                { once: true }
              );

            }
          );

        }


        /*
         * Wait for fonts
         */

        if (
          document.fonts?.ready
        ) {

          await document.fonts.ready;

        }


        /*
         * Wait for all images that
         * are currently rendered
         */

        await waitForImages();


        /*
         * Preload ALL PosterArchive
         * thumbnail WebPs.
         *
         * This means switching between:
         *
         * Mixed Media
         * Illustrative
         * Moodboard
         * Collage
         * Posters
         *
         * will not cause images to suddenly
         * load after clicking.
         */

        await preloadPosterThumbnails();


        /*
         * Small buffer so loading
         * animation does not disappear
         * abruptly
         */

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              200
            )
        );


        if (mounted) {

          /*
           * Mark the initial site loading
           * as complete for this browser tab/session.
           */

          sessionStorage.setItem(
            "freddy-site-loaded",
            "true"
          );


          setIsLoading(false);

        }

      } catch (error) {

        console.error(
          "Page loading error:",
          error
        );


        if (mounted) {

          /*
           * Don't get stuck on the loading screen
           * if something fails.
           */

          sessionStorage.setItem(
            "freddy-site-loaded",
            "true"
          );


          setIsLoading(false);

        }

      }

    };


    loadSite();


    /*
     * Emergency fallback
     */

    const timeout =
      setTimeout(() => {

        if (mounted) {

          sessionStorage.setItem(
            "freddy-site-loaded",
            "true"
          );


          setIsLoading(false);

        }

      }, 20000);


    return () => {

      mounted = false;

      clearTimeout(timeout);

    };

  }, []);


  return isLoading;

}