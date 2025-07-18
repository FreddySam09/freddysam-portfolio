import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import DeskTable from "./components/DeskTable";
import StickyNotesSection from "./components/StickyNotesSection";
import DiceWindow from "./components/DiceWindow";
import Navbar from "./components/Navbar";
import ProjectComponent from "./components/ProjectComponent";
import DigiBridgeGif from "./assets/gifs/digibridge-gif.gif";
import CustomCursor from "./components/CustomCursor";
import mascotGif from "./assets/gifs/mascot-active.gif";
import mascot from "./assets/img/mascot.png"
import AquaVisionGif from "./assets/gifs/aquavision-gif.gif";
import ClickShieldGif from "./assets/gifs/clickshield-gif.gif";
import AboutMe from "./pages/AboutMe";
import DigiBridgePage from "./pages/DigiBridgePage";
import AquaVisionPage from "./pages/AquaVisionPage";
import AboutPage from "./pages/AboutPage";
import AquaVision from "./pages/AquaVision";
import ClickShieldPage from "./pages/ClickShieldPage";

export default function App() {
  const [isDiceOpen, setIsDiceOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const targetRef = useRef(null);
  const deskRef = useRef(null);

  React.useEffect(() => {
    const updateNavbarVisibility = () => {
      if (deskRef.current) {
        const rect = deskRef.current.getBoundingClientRect();
        setIsNavbarVisible(rect.top <= 100);
      }
    };

    window.addEventListener("scroll", updateNavbarVisibility);
    return () => window.removeEventListener("scroll", updateNavbarVisibility);
  }, []);

  return (
    <Router>
      <div className="relative custom-cursor-active">
        <CustomCursor />
        <Routes>
          <Route
            path="/"
            element={
              <div
                ref={targetRef}
                className="relative font-figtree min-h-[200vh] bg-no-repeat bg-cover mt-28 md:mt-16"
              >
                <AnimatePresence>
                  {isNavbarVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed top-0 left-0 w-full z-60"
                    >
                      {/* <Navbar /> */}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    className="pl-4 md:pl-8 ml-4 md:ml-20 select-auto mt-8 md:mt-0"
                  >
                    <p className="text-xl md:text-2xl z-70 mt-34 md:mt-0">Hi, I’m</p>
                    <span className="text-[48px] md:text-[64px] font-[Sue_Ellen_Francisco] underline decoration-dashed z-70 decoration-gray-400 decoration-1 underline-offset-7">
                      Freddy Sam
                    </span>
                    <p className="text-[8px] md:text-[10px] -mt-2 md:-mt-4 text-gray-400 font-bold z-70">NAME</p>
                    <p className="text-xl md:text-2xl mt-2 md:mt-4 leading-6 z-70">
                      A designer capable of developing <br />
                      lovable tech experiences
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    className="-mt-32 md:-mt-64"
                  >
                    <div className="-mt-92 md:-mt-0">
                    <StickyNotesSection />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                  >
                    <div className="mt-66 md:mt-44" ref={deskRef}>
                      <DeskTable
                        onDiceClick={() => setIsDiceOpen(true)}
                        isNavbarVisible={isNavbarVisible}
                      />
                      {isDiceOpen && <DiceWindow onClose={() => setIsDiceOpen(false)} />}
                    </div>
                  </motion.div>

                  <div className="flex flex-col justify-center items-center bg-light mt-66 md:mt-72 gap-16 md:gap-32 px-4 md:px-0 mb-24">
                    <ProjectComponent 
                      title="DigiBridge"
                      from="August 2023"
                      to="April 2025"
                      gif={DigiBridgeGif}
                      link="/digibridge"
                      summary="An E-Learning Platform accessible to everyone, catered towards the remote children lacking access to proper education and facilities."
                      tags={["Smart Education", "Product", "Desktop"]}
                    />
                    <ProjectComponent 
                      title="AquaVision"
                      from="December 2023"
                      to="Present"
                      gif={AquaVisionGif}
                      link="/aquavision"
                      summary="A Smart Autonomous Underwater Vehicle driven system, enabing accurate microplastics detection & collection, and realtime monitoring capabilities."
                      tags={["Marine Engineering", "Technology", "Communication Networks"]}
                    />
                    <ProjectComponent 
                      title="ClickShield"
                      from="May 2024"
                      to="Present"
                      gif={ClickShieldGif}
                      link="/clickshield"
                      summary="A Cybersecurity guardian through a browser extension, that safeguards every click a user makes across the internet"
                      tags={["Cybersecurity", "Product", "Browser Extension"]}
                    />
                  </div>
                </div>
                <div className="w-screen h-[1px] bg-gray-300 border-1 border-gray-200 mb-6"></div>
                <div className="flex flex-row md:items-start items-center md:justify-start justify-center md:text-start text-center">
                <img src={mascot} alt="mascot" className="w-18 md:w-22 md:ml-32 md:mt-8 mt-4" />
                <div className="md:text-start text-center md:justify-start justify-center md:ml-2 mt-4 md:mt-8 text-dark text-4xl md:text-5xl font-sue">
                  Wanna connect<span className="text-niceorange"> ???</span>
                </div>
                </div>
                <div className="flex flex-row md:items-start items-center md:justify-start justify-center md:text-start text-center md:ml-56">
                <div className="md:text-lg text-md md:-mt-8 -mt-4 font-figtree text-gray-700 link-c">
                   <a href="tel:+919360126618">+91 93601 26618</a> <br /> <a href="mailto:freddysamv@gmail.com" className="link-c"><span className="text-sm md:text-md -mt-8 underline underline-offset-4 decoration-dotted decoration-1 link-c">freddysamv@gmail.com</span></a>
                </div>
                </div>
                </div>
            }
          />
          <Route path="/aboutme" element={<AboutPage />} />
          <Route path="/digibridge" element={<DigiBridgePage />} />
          <Route path="/aquavision" element={<AquaVision />} />
          <Route path="/clickshield" element={<ClickShieldPage />} />
        </Routes>
      </div>
    </Router>
  );
}