import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import DeskTable from "./components/DeskTable";
import StickyNotesSection from "./components/StickyNotesSection";
import DiceWindow from "./components/DiceWindow";
import ProjectComponent from "./components/ProjectComponent";
import DigiBridgeGif from "./assets/gifs/digibridge-gif.gif";
import CustomCursor from "./components/CustomCursor";
import mascotGif from "./assets/gifs/mascot-gif.gif";
import mascotGifDark from "./assets/gifs/mascot-gif-dark.gif";
import AquaVisionGif from "./assets/gifs/aquavision-gif.gif";
import VerboFixGif from "./assets/gifs/verbofix-gif.gif";
import { useTheme } from "./context/ThemeContext";

// 💤 Lazy load heavy pages
const DigiBridgePage = lazy(() => import("./pages/DigiBridgePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AquaVision = lazy(() => import("./pages/AquaVision"));
const VerboFixPage = lazy(() => import("./pages/VerboFixPage"));

export default function App() {
  const [isDiceOpen, setIsDiceOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const deskRef = useRef(null);

  const { isDarkMode } = useTheme();

  // Navbar visibility logic — trigger when table hits top of viewport
  useEffect(() => {
    const updateNavbarVisibility = () => {
      if (deskRef.current) {
        const rect = deskRef.current.getBoundingClientRect();
        const shouldBeVisible = rect.top <= 0;

        setIsNavbarVisible((prev) =>
          prev === shouldBeVisible ? prev : shouldBeVisible
        );
      }
    };

    window.addEventListener("scroll", updateNavbarVisibility);
    updateNavbarVisibility(); // initial check
    return () => window.removeEventListener("scroll", updateNavbarVisibility);
  }, []);

  // Subtle project animations
  const projectCardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <Router>
      {/* LazyMotion makes framer-motion load animations only when needed */}
      <LazyMotion features={domAnimation}>
        <div className="relative custom-cursor-active overflow-x-hidden">
          <CustomCursor />
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center text-gray-500 dark:text-gray-300 font-figtree">
                <div className="animate-pulse text-lg font-semibold">
                  Loading Project...
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <div className="relative font-figtree min-h-[200vh] bg-no-repeat bg-cover mt-24 md:mt-12">
                    {/* Hero Section */}
                    <div className="pt-12 pl-4 md:pl-8 ml-4 md:ml-20 mt-8 md:mt-0 select-auto">
                      <p className="text-lg md:text-xl z-70 mt-34 md:mt-0">
                        Hi, I’m
                      </p>
                      <span className="text-[42px] md:text-[58px] font-[Sue_Ellen_Francisco] underline decoration-dashed decoration-gray-400 underline-offset-8 decoration-2">
                        Freddy Sam
                      </span>
                      <p className="text-[7px] md:text-[9px] -mt-2 md:-mt-3 text-gray-400 font-bold z-70">
                        NAME
                      </p>
                      <p className="text-lg md:text-xl mt-2 md:mt-4 leading-6 z-70">
                        A designer capable of developing <br />
                        lovable tech experiences
                      </p>
                    </div>

                    {/* Sticky Notes */}
                    <div className="-mt-88 md:-mt-64">
                      <StickyNotesSection />
                    </div>

                    {/* Desk Scroll Trigger */}
                    <div ref={deskRef} className="mt-66 md:mt-44"></div>

                    {/* DeskTable (fixed transforms handled internally) */}
                    <DeskTable
                      onDiceClick={() => setIsDiceOpen(true)}
                      isNavbarVisible={isNavbarVisible}
                    />
                    {isDiceOpen && (
                      <DiceWindow onClose={() => setIsDiceOpen(false)} />
                    )}

                    {/* Main Content (scaled slightly for focus) */}
                    <div className="scale-[0.95] origin-top">
                      {/* Projects Section */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col justify-center items-center bg-light mt-60 md:mt-72 gap-14 md:gap-28 px-4 md:px-0 mb-24"
                      >
                        {[
                          {
                            title: "DigiBridge",
                            from: "August 2023",
                            to: "April 2025",
                            gif: DigiBridgeGif,
                            link: "/digibridge",
                            summary:
                              "An E-Learning Platform accessible to everyone, catered towards the remote children lacking access to proper education and facilities.",
                            tags: ["Smart Education", "Product", "Desktop"],
                          },
                          {
                            title: "AquaVision",
                            from: "December 2023",
                            to: "Present",
                            gif: AquaVisionGif,
                            link: "/aquavision",
                            summary:
                              "A Smart Autonomous Underwater Vehicle system enabling accurate microplastics detection, collection, and realtime monitoring.",
                            tags: [
                              "Marine Engineering",
                              "Technology",
                              "Networks",
                            ],
                          },
                          {
                            title: "VerboFix",
                            from: "May 2024",
                            to: "Present",
                            gif: VerboFixGif,
                            link: "/verbofix",
                            summary:
                              "An innovative speech dysfluency detection and correction system designed to mitigate stuttering, integrating ML, and real life conversations.",
                            tags: [
                              "Web Platform",
                              "Product",
                              "Social Welfare",
                            ],
                          },
                        ].map((project, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={projectCardVariant}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full flex justify-center"
                          >
                            <ProjectComponent {...project} />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Divider */}
                      <div className="w-screen h-[1px] bg-gray-300 border-1 border-gray-200 mb-6"></div>

                      {/* Contact Section */}
                      <div className="flex flex-row md:items-start items-center md:justify-start justify-center md:text-start text-center">
                        <img
                          src={isDarkMode ? mascotGifDark : mascotGif}
                          alt="mascot"
                          className="w-18 md:w-22 md:ml-32 md:mt-8 mt-4"
                        />
                        <div className="md:text-start text-center md:justify-start justify-center md:ml-2 mt-4 md:mt-8 text-dark text-4xl md:text-5xl font-sue">
                          Wanna connect
                          <span className="text-niceorange"> ???</span>
                        </div>
                      </div>

                      <div className="flex flex-row md:items-start items-center md:justify-start justify-center md:text-start text-center md:ml-56">
                        <div className="md:text-lg text-md md:-mt-8 -mt-4 font-figtree text-gray-700 dark:text-gray-300 link-c">
                          <a href="tel:+919360126618">+91 93601 26618</a>
                          <br />
                          <a
                            href="mailto:freddysamv@gmail.com"
                            className="link-c underline underline-offset-4 decoration-dotted decoration-1"
                          >
                            freddysamv@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/aboutme" element={<AboutPage />} />
              <Route path="/digibridge" element={<DigiBridgePage />} />
              <Route path="/aquavision" element={<AquaVision />} />
              <Route path="/verbofix" element={<VerboFixPage />} />
            </Routes>
          </Suspense>
        </div>
      </LazyMotion>
    </Router>
  );
}
