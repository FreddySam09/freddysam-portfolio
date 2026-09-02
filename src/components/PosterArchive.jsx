import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   IMPORT DESIGNS
========================================================= */

import messi from "../assets/img/posters/messi.png";

import mrVengeance from "../assets/img/posters/mr-vengeance.png";
import oldboy from "../assets/img/posters/oldboy.png";
import ladyVengeance from "../assets/img/posters/lady-vengeance.png";
import heIsTheLight from "../assets/img/posters/he-is-the-light.png";

import boysDontCry from "../assets/img/posters/boys-dont-cry.png";

import spiderverse from "../assets/img/posters/spiderverse.png";

import mrMorale from "../assets/img/posters/mr-morale.png";
import VettelPoster from "../assets/img/posters/vettel.png";

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
        src: messi,
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
            src: mrVengeance,
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
            src: oldboy,
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
            src: ladyVengeance,
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
        src: heIsTheLight,
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
        src: boysDontCry,
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
        src: spiderverse,
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
        src: mrMorale,
        title: "Mr. Morale",
        year: "2026",
        category: "Poster Design",
      },

      {
        id: "vettel",
        src: VettelPoster,
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
  };

  /* =======================================================
     OPEN POSTER
  ======================================================= */

  const openPoster = (poster) => {
    setActivePoster(poster.id);
    setSelectedPoster(poster);
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
            src={poster.src}
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

              {/* Vengeance Cluster */}

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

                /* Single */

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

                /* Two Posters */

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
              FULL PREVIEW
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

                  flex
                  items-center
                  justify-center

                  bg-dark
                "
              >

                <div
                  className="absolute inset-0"
                  onClick={() =>
                    setSelectedPoster(null)
                  }
                />

                <motion.div
                  key={selectedPoster.id}

                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}

                  className="
                    relative
                    z-10
                    w-full
                    h-full

                    flex
                    items-center
                    justify-center

                    px-12
                    md:px-24
                    py-10
                  "
                >

                  <img
                    src={
                      selectedPoster.src
                    }

                    alt={
                      selectedPoster.title
                    }

                    className="
                      max-w-full
                      max-h-full
                      object-contain
                      shadow-2xl
                    "
                  />

                  {/* Close */}

                  <button
                    onClick={() =>
                      setSelectedPoster(null)
                    }

                    className="
                      link-c
                      absolute
                      top-3
                      right-4

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

                  {/* Poster Info */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-1/2
                      -translate-x-1/2
                      text-center
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
                        whitespace-nowrap
                      "
                    >
                      {selectedPoster.title}
                    </h3>

                    <p
                      className="
                        font-figtree
                        text-[10px]
                        md:text-xs
                        opacity-50
                        mt-1
                      "
                    >
                      {selectedPoster.category}
                    </p>

                  </div>

                  {/* Navigation */}

                  {visiblePosters.length >
                    1 && (

                    <>

                      <button
                        onClick={
                          showPrevious
                        }

                        className="
                          link-c
                          absolute
                          left-3
                          md:left-6
                          top-1/2
                          -translate-y-1/2

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

                      <button
                        onClick={
                          showNext
                        }

                        className="
                          link-c
                          absolute
                          right-3
                          md:right-6
                          top-1/2
                          -translate-y-1/2

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

                    </>

                  )}

                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}