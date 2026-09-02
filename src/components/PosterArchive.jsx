import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   FULL DESIGNS
   Original PNGs — only used in the full preview
========================================================= */

import messiFull from "../assets/img/posters/messi.png";

import mrVengeanceFull from "../assets/img/posters/mr-vengeance.png";
import oldboyFull from "../assets/img/posters/oldboy.png";
import ladyVengeanceFull from "../assets/img/posters/lady-vengeance.png";
import heIsTheLightFull from "../assets/img/posters/he-is-the-light.png";

import boysDontCryFull from "../assets/img/posters/boys-dont-cry.png";

import spiderverseFull from "../assets/img/posters/spiderverse.png";

import mrMoraleFull from "../assets/img/posters/mr-morale.png";
import VettelPosterFull from "../assets/img/posters/vettel.png";

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

/* =========================================================
   ARCHIVE DATA
========================================================= */

const archive = [
  {
    id: "mixed-media",
    title: "Mixed Media Design",
    shortTitle: "Mixed Media",
    number: "01",
    description:
      "Photography, typography, textures and visual fragments stitched together.",

    items: [
      {
        id: "messi",
        thumbnail: messiThumb,
        full: messiFull,
        title: "Messi",
        year: "2026",
        category: "Mixed Media Design",
      },
    ],
  },

  {
    id: "illustrative",
    title: "Illustrative Design",
    shortTitle: "Illustrative",
    number: "02",
    description:
      "Geometric forms, stylised characters and illustrated visual worlds.",

    groups: [
      {
        id: "vengeance-trilogy",
        title: "The Vengeance Trilogy",
        subtitle: "Park Chan-wook",

        items: [
          {
            id: "mr-vengeance",
            thumbnail: mrVengeanceThumb,
            full: mrVengeanceFull,
            title: "Sympathy for Mr. Vengeance",
            year: "2026",
            category: "Illustrative Design",
            collection: "The Vengeance Trilogy",

            clusterPosition: {
              x: "2%",
              y: "22%",
              rotate: -7,
              width: "34%",
              zIndex: 1,

              mobile: {
                x: "2%",
                y: "22%",
                width: "42%",
              },
            },
          },

          {
            id: "oldboy",
            thumbnail: oldboyThumb,
            full: oldboyFull,
            title: "Oldboy",
            year: "2026",
            category: "Illustrative Design",
            collection: "The Vengeance Trilogy",

            clusterPosition: {
              x: "29%",
              y: "3%",
              rotate: 3,
              width: "34%",
              zIndex: 3,

              mobile: {
                x: "29%",
                y: "3%",
                width: "42%",
              },
            },
          },

          {
            id: "lady-vengeance",
            thumbnail: ladyVengeanceThumb,
            full: ladyVengeanceFull,
            title: "Lady Vengeance",
            year: "2026",
            category: "Illustrative Design",
            collection: "The Vengeance Trilogy",

            clusterPosition: {
              x: "56%",
              y: "22%",
              rotate: 8,
              width: "34%",
              zIndex: 2,

              mobile: {
                x: "56%",
                y: "22%",
                width: "42%",
              },
            },
          },
        ],
      },
    ],

    items: [
      {
        id: "he-is-the-light",
        thumbnail: heIsTheLightThumb,
        full: heIsTheLightFull,
        title: "He Is the Light",
        year: "2026",
        category: "Illustrative Design",
      },
    ],
  },

  {
    id: "moodboard",
    title: "Moodboard Design",
    shortTitle: "Moodboard",
    number: "03",
    description:
      "Visual references, music, fashion and atmosphere brought into one composition.",

    items: [
      {
        id: "boys-dont-cry",
        thumbnail: boysDontCryThumb,
        full: boysDontCryFull,
        title: "Boys Don't Cry / Blonde",
        year: "2026",
        category: "Moodboard Design",
      },
    ],
  },

  {
    id: "collage",
    title: "Collage",
    shortTitle: "Collage",
    number: "04",
    description:
      "Fragments from different worlds reconstructed into one visual composition.",

    items: [
      {
        id: "spiderverse",
        thumbnail: spiderverseThumb,
        full: spiderverseFull,
        title: "Into the Spider-Verse",
        year: "2026",
        category: "Collage",
      },
    ],
  },

  {
    id: "posters",
    title: "Posters",
    shortTitle: "Posters",
    number: "05",
    description:
      "Standalone visual explorations designed as individual poster pieces.",

    items: [
      {
        id: "mr-morale",
        thumbnail: mrMoraleThumb,
        full: mrMoraleFull,
        title: "Mr. Morale",
        year: "2026",
        category: "Poster Design",
      },

      {
        id: "vettel",
        thumbnail: VettelPosterThumb,
        full: VettelPosterFull,
        title: "Sebastian Vettel",
        year: "2026",
        category: "Poster Design",
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
    width: "26%",
  },

  {
    x: "37%",
    y: "5%",
    rotate: 5,
    width: "25%",
  },

  {
    x: "63%",
    y: "12%",
    rotate: -4,
    width: "25%",
  },

  {
    x: "18%",
    y: "36%",
    rotate: 4,
    width: "26%",
  },

  {
    x: "52%",
    y: "34%",
    rotate: -6,
    width: "27%",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PosterArchive() {
  const [activeCategory, setActiveCategory] =
    useState("mixed-media");

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

          {/* Poster thumbnail */}

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

          {/* Active poster information */}

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
        md:py-24

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
            md:text-6xl

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

      <div className="relative z-10 max-w-7xl mx-auto mt-12 md:mt-16">

        <div
          className="
            border-y
            border-dark/10
          "
        >

          <div className="flex overflow-x-auto">

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

                    min-w-[165px]
                    md:min-w-[200px]

                    px-5
                    md:px-7

                    py-5
                    md:py-7

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
              mt-7
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
                  md:text-5xl

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

          className="
            relative

            max-w-7xl
            mx-auto

            mt-8
            md:mt-10

            h-[420px]
            md:h-[560px]
          "
        >

          {/* =================================================
              ILLUSTRATIVE DESIGN
          ================================================= */}

          {activeCategory ===
            "illustrative" && (

            <>

              {/* Vengeance Trilogy cluster */}

              <div
                className="
                  absolute

                  left-[8%]
                  top-[12%]

                  w-[48%]
                  h-[56%]
                "
              >

                <div
                  className="
                    absolute

                    left-0
                    -top-8

                    font-sue

                    text-sm
                    md:text-base

                    text-gray-400
                    dark:text-gray-500
                  "
                >
                  The Vengeance Trilogy
                </div>

                {currentCategory.groups[0].items.map(
                  (poster, index) =>
                    renderPoster(
                      poster,
                      poster.clusterPosition,
                      index
                    )
                )}

              </div>

              {/* He Is The Light */}

              {currentCategory.items.map(
                (poster, index) => {

                  const position = {
                    x: "70%",
                    y: "16%",
                    rotate: -5,
                    width: "23%",

                    mobile: {
                      x: "58%",
                      y: "20%",
                      width: "32%",
                    },
                  };

                  return renderPoster(
                    poster,
                    position,
                    index + 3
                  );
                }
              )}

            </>

          )}

          {/* =================================================
              OTHER CATEGORIES
          ================================================= */}

          {activeCategory !==
            "illustrative" && (

            visiblePosters.map(
              (poster, index) => {

                let position =
                  posterPositions[
                    index %
                      posterPositions.length
                  ];

                /* Single poster */

                if (
                  visiblePosters.length ===
                  1
                ) {
                  position = {
                    x: "36%",
                    y: "6%",
                    rotate: -4,
                    width: "28%",

                    mobile: {
                      x: "28%",
                      y: "6%",
                      width: "44%",
                    },
                  };
                }

                /* Two posters */

                if (
                  visiblePosters.length ===
                  2
                ) {
                  position =
                    index === 0
                      ? {
                          x: "22%",
                          y: "8%",
                          rotate: -6,
                          width: "28%",

                          mobile: {
                            x: "10%",
                            y: "8%",
                            width: "42%",
                          },
                        }
                      : {
                          x: "51%",
                          y: "16%",
                          rotate: 6,
                          width: "28%",

                          mobile: {
                            x: "49%",
                            y: "16%",
                            width: "42%",
                          },
                        };
                }

                return renderPoster(
                  poster,
                  position,
                  index
                );
              }
            )

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

                {/* Background close area */}

                <div
                  className="absolute inset-0"
                  onClick={closePoster}
                />

                {/* Preview */}

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

                  {/* Top bar */}

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

                  {/* Image area */}

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

                    {/* Full image loading state */}

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

                    {/* Full PNG */}

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

                    {/* Previous */}

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

                    {/* Next */}

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

                  {/* Bottom category */}

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