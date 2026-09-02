import { useEffect, useState } from "react";

export default function usePageLoader() {
  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {

    let mounted = true;


    const waitForImages = async () => {

      const images =
        Array.from(
          document.querySelectorAll("img")
        );


      await Promise.all(

        images.map((image) => {

          if (image.complete) {
            return Promise.resolve();
          }


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


    const loadSite = async () => {

      try {

        /*
         * Wait for browser load
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

        if (document.fonts?.ready) {
          await document.fonts.ready;
        }


        /*
         * Wait for all initially rendered images
         */

        await waitForImages();


        /*
         * Small buffer so the transition
         * feels intentional
         */

        await new Promise(
          (resolve) =>
            setTimeout(resolve, 200)
        );


        if (mounted) {
          setIsLoading(false);
        }

      } catch (error) {

        console.error(
          "Page loading error:",
          error
        );

        if (mounted) {
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