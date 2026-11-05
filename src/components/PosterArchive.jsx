import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   THUMBNAILS
   Lightweight WebPs — used in draggable archive
========================================================= */

import messiThumb from "../assets/img/posters/thumbnails/messi.webp";

import mrVengeanceThumb from "../assets/img/posters/thumbnails/mr-vengeance.webp";
import oldboyThumb from "../assets/img/posters/thumbnails/oldboy.webp";
import ladyVengeanceThumb from "../assets/img/posters/thumbnails/lady-vengeance.webp";
import heIsTheLightThumb from "../assets/img/posters/thumbnails/he-is-the-light.webp";

import boysDontCryThumb from "../assets/img/posters/thumbnails/boys-dont-cry.webp";

import spiderverseThumb from "../assets/img/posters/thumbnails/spiderverse.webp";

import mrMoraleThumb from "../assets/img/posters/thumbnails/mr-morale.webp";
import VettelPosterThumb from "../assets/img/posters/thumbnails/vettel.webp";
import gorillazThumb from "../assets/img/posters/thumbnails/gorillaz.webp"
import dorothyThumb from "../assets/img/posters/thumbnails/dorothy.webp"
import nocThumb from "../assets/img/posters/thumbnails/no-other-choice.webp"

/* =========================================================
   ARCHIVE DATA
   Categories are based on the visual approach / construction.
========================================================= */

const archive = [
  {
    id: "illustration",
    title: "Illustration",
    shortTitle: "Illustration",
    number: "01",
    description:
      "Original character artwork, stylised forms and illustrated visual worlds.",

    items: [
      {
        id: "dorothy",
        thumbnail: dorothyThumb,
        full: dorothyThumb,
        title: "Dorothy",
        year: "2026",
        category: "Illustration",
      },
      {
        id: "mr-vengeance",
        thumbnail: mrVengeanceThumb,
        full: mrVengeanceThumb,
        title: "Sympathy for Mr. Vengeance",
        year: "2026",
        category: "Illustration",
        collection: "The Vengeance Trilogy",
      },
      {
        id: "oldboy",
        thumbnail: oldboyThumb,
        full: oldboyThumb,
        title: "Oldboy",
        year: "2026",
        category: "Illustration",
        collection: "The Vengeance Trilogy",
      },
      {
        id: "lady-vengeance",
        thumbnail: ladyVengeanceThumb,
        full: ladyVengeanceThumb,
        title: "Lady Vengeance",
        year: "2026",
        category: "Illustration",
        collection: "The Vengeance Trilogy",
      },
      {
        id: "he-is-the-light",
        thumbnail: heIsTheLightThumb,
        full: heIsTheLightThumb,
        title: "He Is the Light",
        year: "2026",
        category: "Illustration",
      },
    ],
  },

  {
    id: "image-composition",
    title: "Image Composition",
    shortTitle: "Image Composition",
    number: "02",
    description:
      "Photographs, film imagery and visual fragments reworked into bold graphic compositions.",

    items: [
      {
        id: "mr-morale",
        thumbnail: mrMoraleThumb,
        full: mrMoraleThumb,
        title: "Mr. Morale",
        year: "2026",
        category: "Image Composition",
      },
      {
        id: "spiderverse",
        thumbnail: spiderverseThumb,
        full: spiderverseThumb,
        title: "Into the Spider-Verse",
        year: "2026",
        category: "Image Composition",
      },
      {
        id: "gorillaz",
        thumbnail: gorillazThumb,
        full: gorillazThumb,
        title: "Gorillaz - The Mountain",
        year: "2026",
        category: "Image Composition",
      },
    ],
  },

  {
    id: "typography-editorial",
    title: "Typography & Editorial",
    shortTitle: "Typography & Editorial",
    number: "03",
    description:
      "Type-led layouts, editorial thinking and carefully directed imagery.",

    items: [
      {
        id: "boys-dont-cry",
        thumbnail: boysDontCryThumb,
        full: boysDontCryThumb,
        title: "Boys Don't Cry / Blonde",
        year: "2026",
        category: "Typography & Editorial",
      },
      {
        id: "vettel",
        thumbnail: VettelPosterThumb,
        full: VettelPosterThumb,
        title: "Sebastian Vettel",
        year: "2026",
        category: "Typography & Editorial",
      },
    ],
  },

  {
    id: "material-experiments",
    title: "Material Experiments",
    shortTitle: "Material Experiments",
    number: "04",
    description:
      "Tactile surfaces, physical mark-making and material-led visual experiments.",

    items: [
      {
        id: "no-other-choice",
        thumbnail: nocThumb,
        full: nocThumb,
        title: "No Other Choice",
        year: "2026",
        category: "Material Experiments",
      },
      {
        id: "messi",
        thumbnail: messiThumb,
        full: messiThumb,
        title: "Messi",
        year: "2026",
        category: "Material Experiments",
      },
    ],
  },
];

/* =========================================================
   DEFAULT POSTER POSITIONS
========================================================= */

const posterPositions = [
  {
    x: "9%",
    y: "8%",
    rotate: -7,
    width: "22%",
    mobile: { x: "3%", y: "8%", width: "34%" },
  },
  {
    x: "37%",
    y: "5%",
    rotate: 5,
    width: "22%",
    mobile: { x: "31%", y: "5%", width: "34%" },
  },
  {
    x: "63%",
    y: "12%",
    rotate: -4,
    width: "22%",
    mobile: { x: "59%", y: "12%", width: "34%" },
  },
  {
    x: "18%",
    y: "36%",
    rotate: 4,
    width: "22%",
    mobile: { x: "10%", y: "39%", width: "34%" },
  },
  {
    x: "52%",
    y: "34%",
    rotate: -6,
    width: "23%",
    mobile: { x: "49%", y: "37%", width: "34%" },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PosterArchive() {
  const [activeCategory, setActiveCategory] =
    useState("illustration");

  const [activePoster, setActivePoster] =
    useState(null);

  const [selectedPoster, setSelectedPoster] =
    useState(null);

  const [isFullImageLoading, setIsFullImageLoading] =
    useState(false);

  /* =======================================================
     MOBILE DETECTION
  ======================================================= */

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);

  /* =======================================================
     CURRENT CATEGORY
  ======================================================= */

  const currentCategory = useMemo(() => {
    return archive.find(
      (category) =>
        category.id === activeCategory
    );
  }, [activeCategory]);

  /* =======================================================
     ALL POSTERS IN CATEGORY
  ======================================================= */

  const visiblePosters = useMemo(() => {
    if (!currentCategory) {
      return [];
    }

    const normalPosters =
      currentCategory.items || [];

    const groupedPosters =
      currentCategory.groups
        ? currentCategory.groups.flatMap(
            (group) =>
              group.items.map((poster) => ({
                ...poster,
                groupTitle: group.title,
              }))
          )
        : [];

    return [
      ...normalPosters,
      ...groupedPosters,
    ];
  }, [currentCategory]);

  const collectionPosters = useMemo(
    () => visiblePosters.filter((poster) => poster.collection),
    [visiblePosters]
  );

  const standalonePosters = useMemo(
    () => visiblePosters.filter((poster) => !poster.collection),
    [visiblePosters]
  );

  /* =======================================================
     ESC CLOSE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPoster(null);
        setIsFullImageLoading(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const changeCategory = (id) => {
    setActiveCategory(id);
    setActivePoster(null);
    setSelectedPoster(null);
    setIsFullImageLoading(false);
  };

  /* =======================================================
     OPEN FULL POSTER
  ======================================================= */

  const openPoster = (poster) => {
    setActivePoster(poster.id);
    setSelectedPoster(poster);
    setIsFullImageLoading(true);
  };

  /* =======================================================
     CLOSE FULL POSTER
  ======================================================= */

  const closePoster = () => {
    setSelectedPoster(null);
    setIsFullImageLoading(false);
  };

  /* =======================================================
     PREVIEW NAVIGATION
  ======================================================= */

  const selectedIndex =
    selectedPoster
      ? visiblePosters.findIndex(
          (poster) =>
            poster.id === selectedPoster.id
        )
      : -1;

  const showPrevious = () => {
    if (!visiblePosters.length) return;

    const index =
      selectedIndex <= 0
        ? visiblePosters.length - 1
        : selectedIndex - 1;

    const poster =
      visiblePosters[index];

    setSelectedPoster(poster);
    setActivePoster(poster.id);
    setIsFullImageLoading(true);
  };

  const showNext = () => {
    if (!visiblePosters.length) return;

    const index =
      selectedIndex >=
      visiblePosters.length - 1
        ? 0
        : selectedIndex + 1;

    const poster =
      visiblePosters[index];

    setSelectedPoster(poster);
    setActivePoster(poster.id);
    setIsFullImageLoading(true);
  };

  /* =======================================================
     POSTER RENDERER
  ======================================================= */

  const renderPoster = (
    poster,
    position,
    index
  ) => {
    const isActive =
      activePoster === poster.id;

    const finalPosition =
      isMobile && position.mobile
        ? {
            ...position,
            ...position.mobile,
          }
        : position;

    return (
      <motion.div
        key={poster.id}

        drag
        dragMomentum={false}
        dragElastic={0.08}

        onPointerDown={() =>
          setActivePoster(poster.id)
        }

        onClick={() =>
          setActivePoster(poster.id)
        }

        onDoubleClick={() =>
          openPoster(poster)
        }

        initial={{
          opacity: 0,
          scale: 0.75,
        }}

        animate={{
          opacity: 1,
          scale: 1,
          rotate: finalPosition.rotate,
        }}

        transition={{
          delay: index * 0.08,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}

        whileHover={{
          scale: 1.035,
          rotate: 0,
          y: -6,
        }}

        whileDrag={{
          scale: 1.06,
          rotate: 0,
        }}

        className="
          thumb-c
          absolute
          select-none
          touch-none
        "

        style={{
          left: finalPosition.x,
          top: finalPosition.y,
          width: finalPosition.width,

          zIndex: isActive
            ? 100
            : finalPosition.zIndex ||
              10 + index,
        }}
      >
        <div className="relative">

          <img
            src={poster.thumbnail}
            alt={poster.title}
            draggable="false"

            className="
              block
              w-full
              h-auto
              pointer-events-none
              shadow-[0_18px_45px_rgba(0,0,0,0.16)]
            "
          />

          <AnimatePresence>

            {isActive && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -6,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -6,
                }}

                transition={{
                  duration: 0.18,
                }}

                className="
                  absolute
                  left-0
                  top-full
                  pt-2
                  z-[150]

                  flex
                  flex-col
                  items-start
                  gap-1

                  pointer-events-auto
                "
              >

                <span
                  className="
                    whitespace-nowrap
                    font-sue
                    text-sm
                    md:text-base

                    text-gray-500
                    dark:text-gray-300
                  "
                >
                  {poster.title}
                </span>

                <button
                  onPointerDown={(event) =>
                    event.stopPropagation()
                  }

                  onClick={(event) => {
                    event.stopPropagation();
                    openPoster(poster);
                  }}

                  className="
                    link-c

                    whitespace-nowrap

                    font-figtree
                    text-[10px]
                    md:text-xs

                    uppercase
                    tracking-[0.16em]

                    text-dark

                    transition-opacity
                    hover:opacity-60
                  "
                >
                  View Full Design ↗
                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="
        poster-archive
        normal-c

        relative

        py-16
        md:py-16

        px-4
        md:px-10

        bg-light
        text-dark

        transition-colors
        duration-300
      "
    >

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="
            font-sue
            text-2xl
            md:text-3xl
            rotate-[-2deg]
            mb-1
            text-niceorange
          "
        >
          Things I Made
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
            delay: 0.1,
          }}

          className="
            font-figtree
            font-bold

            text-4xl
            md:text-4xl

            tracking-tight
          "
        >
          WHEN I WASN'T CODING
        </motion.h2>

        <p
          className="
            mt-4

            font-sue

            text-xl
            md:text-2xl

            text-gray-500
            dark:text-gray-300
          "
        >
          posters, experiments & things
          that escaped my brain
        </p>

      </div>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto mt-12 md:mt-10">

        <div
          className="
            border-y
            border-dark/10
          "
        >

          <div
            className="
              flex
              justify-start
              md:justify-center

              overflow-x-auto
              overflow-y-visible

              w-full
              max-w-full

              px-1
              md:px-0
            "
          >

            {archive.map((category) => {
              const isActive =
                category.id ===
                activeCategory;

              return (
                <button
                  key={category.id}

                  onClick={() =>
                    changeCategory(
                      category.id
                    )
                  }

                  className={`
                    relative
                    items-center
                    justify-center

                    min-w-[165px]
                    md:min-w-[175px]

                    px-5
                    md:px-5

                    py-5
                    md:py-5

                    text-left

                    border-r
                    border-dark/10

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-dark text-light"
                        : "hover:bg-dark/5"
                    }
                  `}
                >

                  <span
                    className="
                      block

                      font-figtree

                      text-[10px]

                      tracking-[0.25em]

                      opacity-50
                      mb-2
                    "
                  >
                    {category.number}
                  </span>

                  <span
                    className="
                      block

                      font-figtree
                      font-bold

                      text-sm
                      md:text-base
                    "
                  >
                    {category.shortTitle}
                  </span>

                  {isActive && (

                    <motion.div
                      layoutId="active-category"

                      className="
                        absolute

                        left-0
                        bottom-0

                        h-[3px]
                        w-full

                        bg-light
                      "
                    />

                  )}

                </button>
              );
            })}

          </div>

        </div>

        {/* ===================================================
            CATEGORY INFORMATION
        =================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={currentCategory.id}

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -10,
            }}

            className="
              flex
              flex-col

              md:flex-row
              md:items-end

              justify-between

              gap-5
              mt-5
            "
          >

            <div>

              <p
                className="
                  font-figtree

                  text-xs

                  tracking-[0.25em]
                  uppercase

                  text-gray-400
                  dark:text-gray-500
                "
              >
                Archive / {currentCategory.number}
              </p>

              <h3
                className="
                  font-figtree
                  font-bold

                  text-3xl
                  md:text-4xl

                  mt-2
                "
              >
                {currentCategory.title}
              </h3>

            </div>

            <p
              className="
                max-w-md

                font-sue

                text-lg
                md:text-xl

                md:text-right

                text-gray-500
                dark:text-gray-300
              "
            >
              {currentCategory.description}
            </p>

          </motion.div>

        </AnimatePresence>

      </div>

      {/* =====================================================
          POSTER PLAYGROUND
      ===================================================== */}

      <AnimatePresence mode="wait">

        <motion.div
          key={activeCategory}

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className={`
            relative
            max-w-7xl
            mx-auto
            mt-8
            md:mt-6
            h-[430px]
            md:h-[560px]
            ${isMobile && activeCategory === "illustration" ? "h-[570px]" : ""}
          `}
        >

          {/* =================================================
              CATEGORY POSTERS
          ================================================= */}

          {activeCategory === "illustration" ? (
            <>
              {/* Two featured illustrated posters */}
              {standalonePosters.map((poster, index) => {
                const position =
                  poster.id === "dorothy"
                    ? {
                        x: "19%",
                        y: "3%",
                        rotate: -5,
                        width: "19%",
                        zIndex: 12,
                        mobile: {
                          x: "7%",
                          y: "3%",
                          width: "34%",
                        },
                      }
                    : {
                        x: "61%",
                        y: "5%",
                        rotate: 4,
                        width: "19%",
                        zIndex: 11,
                        mobile: {
                          x: "59%",
                          y: "3%",
                          width: "34%",
                        },
                      };

                return renderPoster(poster, position, index);
              })}

              {/* The Vengeance Trilogy — tightly grouped, with its title underneath */}
              <div
                className={`
                  absolute
                  ${isMobile
                    ? "left-[5%] top-[43%] w-[90%] h-[230px]"
                    : "left-[31%] top-[51%] w-[38%] h-[255px]"
                  }
                `}
              >
                <div
                  className={`
                    absolute inset-x-0 top-0
                    ${isMobile ? "h-[185px]" : "h-[215px]"}
                  `}
                >
                  {collectionPosters.map((poster, index) => {
                    const collectionPositions = [
                      {
                        x: "7%",
                        y: "5%",
                        rotate: -5,
                        width: "22%",
                        zIndex: 12,
                        mobile: { x: "3%", y: "5%", width: "27%" },
                      },
                      {
                        x: "36%",
                        y: "0%",
                        rotate: 1,
                        width: "22%",
                        zIndex: 14,
                        mobile: { x: "36.5%", y: "0%", width: "27%" },
                      },
                      {
                        x: "65%",
                        y: "6%",
                        rotate: 5,
                        width: "22%",
                        zIndex: 13,
                        mobile: { x: "70%", y: "6%", width: "27%" },
                      },
                    ];

                    return renderPoster(
                      poster,
                      collectionPositions[index],
                      index + standalonePosters.length
                    );
                  })}
                </div>

                <p
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    text-center
                    font-figtree
                    text-[9px]
                    md:text-[11px]
                    uppercase
                    tracking-[0.24em]
                    text-gray-500
                    dark:text-gray-300
                  "
                >
                  The Vengeance Trilogy
                </p>
              </div>
            </>
          ) : (
            visiblePosters.map((poster, index) => {
              let position =
                posterPositions[index % posterPositions.length];

              if (visiblePosters.length === 1) {
                position = {
                  x: "36%",
                  y: "6%",
                  rotate: -4,
                  width: "24%",
                  mobile: {
                    x: "28%",
                    y: "6%",
                    width: "38%",
                  },
                };
              } else if (visiblePosters.length === 2) {
                position =
                  index === 0
                    ? {
                        x: "25%",
                        y: "8%",
                        rotate: -5,
                        width: "23%",
                        mobile: {
                          x: "10%",
                          y: "8%",
                          width: "36%",
                        },
                      }
                    : {
                        x: "53%",
                        y: "14%",
                        rotate: 5,
                        width: "23%",
                        mobile: {
                          x: "53%",
                          y: "14%",
                          width: "36%",
                        },
                      };
              }

              return renderPoster(poster, position, index);
            })
          )}

          {/* =================================================
              FULL DESIGN PREVIEW
          ================================================= */}

          <AnimatePresence>

            {selectedPoster && (

              <motion.div
                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                exit={{
                  opacity: 0,
                }}

                className="
                  absolute
                  inset-0

                  z-[300]

                  bg-dark
                "
              >

                <div
                  className="absolute inset-0"
                  onClick={closePoster}
                />

                <motion.div
                  key={selectedPoster.id}

                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.97,
                  }}

                  transition={{
                    duration: 0.28,
                    ease: "easeOut",
                  }}

                  className="
                    relative
                    z-10

                    w-full
                    h-full

                    flex
                    flex-col

                    px-4
                    py-4

                    md:px-8
                    md:py-6
                  "
                >

                  <div
                    className="
                      shrink-0

                      flex
                      items-center
                      justify-between

                      gap-4

                      mb-3
                      md:mb-5
                    "
                  >

                    <div
                      className="
                        min-w-0
                        text-light
                      "
                    >

                      <p
                        className="
                          font-sue

                          text-xs
                          md:text-sm

                          opacity-60
                        "
                      >
                        {selectedPoster.year}
                      </p>

                      <h3
                        className="
                          font-figtree
                          font-bold

                          text-base
                          md:text-xl

                          truncate
                        "
                      >
                        {selectedPoster.title}
                      </h3>

                    </div>

                    <button
                      onClick={closePoster}

                      className="
                        link-c

                        shrink-0

                        font-sue

                        text-lg
                        md:text-xl

                        text-light

                        opacity-60
                        hover:opacity-100

                        transition-opacity
                      "
                    >
                      close ×
                    </button>

                  </div>

                  <div
                    className="
                      relative

                      flex-1
                      min-h-0

                      flex
                      items-center
                      justify-center

                      px-8

                      md:px-20
                    "
                  >

                    <AnimatePresence>

                      {isFullImageLoading && (

                        <motion.div
                          initial={{
                            opacity: 0,
                          }}

                          animate={{
                            opacity: 1,
                          }}

                          exit={{
                            opacity: 0,
                          }}

                          className="
                            absolute
                            inset-0

                            z-10

                            flex
                            flex-col

                            items-center
                            justify-center

                            pointer-events-none
                          "
                        >

                          <motion.div
                            animate={{
                              scale: [
                                1,
                                1.5,
                                1,
                              ],

                              opacity: [
                                1,
                                0.45,
                                1,
                              ],
                            }}

                            transition={{
                              duration: 1.1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}

                            className="
                              w-2.5
                              h-2.5

                              rounded-full

                              bg-niceorange
                            "
                          />

                          <p
                            className="
                              mt-4

                              font-sue

                              text-base
                              md:text-lg

                              text-light

                              opacity-50
                            "
                          >
                            loading full design...
                          </p>

                        </motion.div>

                      )}

                    </AnimatePresence>

                    <img
                      key={selectedPoster.id}

                      src={selectedPoster.full}

                      alt={selectedPoster.title}

                      onLoad={() =>
                        setIsFullImageLoading(false)
                      }

                      onError={() =>
                        setIsFullImageLoading(false)
                      }

                      className={`
                        relative
                        z-20

                        max-w-full
                        max-h-full

                        object-contain

                        shadow-2xl

                        transition-opacity
                        duration-300

                        ${
                          isFullImageLoading
                            ? "opacity-0"
                            : "opacity-100"
                        }
                      `}
                    />

                    {visiblePosters.length > 1 && (

                      <button
                        onClick={showPrevious}

                        className="
                          link-c

                          absolute

                          left-0
                          md:left-2

                          top-1/2
                          -translate-y-1/2

                          z-30

                          px-3
                          py-2

                          font-figtree
                          text-sm

                          border
                          border-light/30

                          text-light

                          hover:bg-light
                          hover:text-dark

                          transition-colors
                        "
                      >
                        ←
                      </button>

                    )}

                    {visiblePosters.length > 1 && (

                      <button
                        onClick={showNext}

                        className="
                          link-c

                          absolute

                          right-0
                          md:right-2

                          top-1/2
                          -translate-y-1/2

                          z-30

                          px-3
                          py-2

                          font-figtree
                          text-sm

                          border
                          border-light/30

                          text-light

                          hover:bg-light
                          hover:text-dark

                          transition-colors
                        "
                      >
                        →
                      </button>

                    )}

                  </div>

                  <div
                    className="
                      shrink-0

                      mt-3
                      md:mt-4

                      text-center

                      text-light
                    "
                  >

                    <p
                      className="
                        font-figtree

                        text-[10px]
                        md:text-xs

                        opacity-50
                      "
                    >
                      {selectedPoster.category}
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}