import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceModal from '../components/ExperienceModal';
import SkillsModal from '../components/SkillsModal';
import AchievementsModal from '../components/AchievementsModal';

// Assets
import FreddyPic from "../assets/img/freddy-pic.png";
import PaperNote from "../assets/img/papernote.png";
import BooksCutout from "../assets/img/books-cutout.png";
import BooksScraps from "../assets/img/books-scraps.png";
import HeadphonesCutout from "../assets/img/headphones-cutout.png";
import MusicScraps from "../assets/img/music-scraps.png";
import CarCutout from "../assets/img/car-cutout.png";
import TravelScraps from "../assets/img/travel-scraps.png";
import CamCutout from "../assets/img/cam-cutout.png";
import PhotoScraps from "../assets/img/photo-scraps.png";

// Reusable animated row component
const AnimatedRow = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8"
    >
      {children}
    </motion.div>
  );
};

const AboutMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(null);
  const headerControls = useAnimation();
  const scrapbookControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      headerControls.start({
        x: window.innerWidth >= 768 ? '-23%' : 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
      scrapbookControls.start({
        y: window.innerWidth < 768 ? 360 : 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    } else {
      headerControls.start({
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
      scrapbookControls.start({
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      });
    }
  }, [modalOpen, headerControls, scrapbookControls]);

  const getOverlayColor = () => {
    const startColor = { r: 59, g: 130, b: 246 }; // Blue
    const endColor = { r: 59, g: 38, b: 19 };     // Orange
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollProgress);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollProgress);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollProgress);
    return `rgba(${r}, ${g}, ${b}, 0.4)`;
  };

  const toggleModal = (modalType) => {
    setModalOpen(modalOpen === modalType ? null : modalType);
  };

  return (
    <div className="relative min-h-[200vh] font-sue custom-cursor-active">
      <a
        href="/"
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 flex items-center gap-2 text-xs md:text-sm font-figtree text-darkgray px-3 md:px-4 py-1 md:py-2 rounded-full hover:text-dark hover:font-semibold transition-all duration-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 md:w-4 h-3 md:h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Home
      </a>
      {/* Scroll-Responsive Radial Overlay */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${getOverlayColor()} 0%, transparent 80%)`,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 pt-12 md:pt-16 px-4 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Header */}
          <div className="relative">
            <motion.div
              className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-6 mb-12 md:mb-50 mt-8 md:mt-20"
              animate={headerControls}
            >
              <div className="relative group mx-auto md:mx-0">
                <motion.div
                  className="absolute -inset-4 md:-inset-8 rounded-full bg-blue-300 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <img
                  src={FreddyPic}
                  alt="My Pic XD"
                  className="relative z-10 w-42 md:w-76 drop-shadow-xl md:-ml-12 hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <div className="flex flex-col text-center md:text-start gap-2">
                <p className="text-2xl md:text-4xl">Hey There!</p>
                <h1 className="text-3xl md:text-5xl">I'm Freddy Samjacob</h1>
                <div className="flex justify-center md:justify-start gap-2 mt-3 md:mt-5">
                  <button
                    onClick={() => toggleModal('experience')}
                    className={`px-2 py-1 rounded-sm text-sm md:text-md font-figtree transition thumb-c ${
                      modalOpen === 'experience' ? 'bg-gray-600 text-gray-300' : 'text-gray-600 bg-gray-100 hover:bg-gray-600 hover:text-gray-300'
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => toggleModal('skills')}
                    className={`px-2 py-1 rounded-sm text-sm md:text-md font-figtree transition thumb-c ${
                      modalOpen === 'skills' ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-gray-300'
                    }`}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => toggleModal('achievements')}
                    className={`px-2 py-1 rounded-sm text-sm md:text-md font-figtree transition thumb-c ${
                      modalOpen === 'achievements' ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-gray-300'
                    }`}
                  >
                    Achievements
                  </button>
                </div>
              </div>
            </motion.div>
            {/* Modal Container */}
            <div className="absolute top-82 md:top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-120 md:left-215 md:-mr-26 md:-mt-30 z-50">
              <ExperienceModal isOpen={modalOpen === 'experience'} onClose={() => toggleModal('experience')} />
              <SkillsModal isOpen={modalOpen === 'skills'} onClose={() => toggleModal('skills')} />
              <AchievementsModal isOpen={modalOpen === 'achievements'} onClose={() => toggleModal('achievements')} />
            </div>
          </div>

          {/* Scrapbook Sections */}
          <motion.div
            className="flex flex-col gap-8 mt-58 md:mt-0 md:gap-0"
            animate={scrapbookControls}
          >
            {/* Row 1 */}
            <AnimatedRow>
              <div className="relative w-full">
                <motion.img
                  src={PaperNote}
                  alt="Note"
                  initial={{ rotate: -2 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                />
                <p className="absolute top-6 md:top-10 left-6 md:left-10 text-lg md:text-2xl leading-relaxed w-[65%] mt-12 md:mt-10 ml-2 md:ml-4">
                  I’m a curious learner, always looking to learn and grow as a person, looking to better myself.
                </p>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  src={BooksCutout}
                  className="absolute bottom-2 right-2 md:right-4 w-[80px] md:w-[90px]"
                />
              </div>
              <motion.img
                src={BooksScraps}
                className="w-full rounded-xl drop-shadow-xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </AnimatedRow>

            {/* Row 2 */}
            <AnimatedRow>
              <motion.img
                src={PhotoScraps}
                className="w-full rounded-xl drop-shadow-xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              />
              <div className="relative w-full">
                <motion.img
                  src={PaperNote}
                  alt="Note"
                  initial={{ rotate: 2 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                />
                <p className="absolute top-6 md:top-10 left-6 md:left-10 text-lg md:text-2xl leading-relaxed w-[65%] md:w-[68%] mt-12 md:mt-10 ml-2 md:ml-4">
                  I love to soak into the moment and live it to the fullest. I love photography as it freezes these moments forever.
                </p>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  src={CamCutout}
                  className="absolute bottom-2 right-2 md:right-3 w-[90px] md:w-[100px] -rotate-6"
                />
              </div>
            </AnimatedRow>

            {/* Row 3 */}
            <AnimatedRow>
              <div className="relative w-full">
                <motion.img
                  src={PaperNote}
                  alt="Note"
                  initial={{ rotate: -1 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                />
                <p className="absolute top-6 md:top-10 left-6 md:left-10 text-lg md:text-2xl leading-relaxed w-[65%] mt-12 md:mt-16 ml-2 md:ml-4">
                  I love to travel and explore, especially do that and work with a cool and energetic team around me.
                </p>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={CarCutout}
                  className="absolute bottom-2 right-2 md:right-4 w-[90px] md:w-[140px] -rotate-6"
                />
              </div>
              <motion.img
                src={TravelScraps}
                className="w-full rounded-xl drop-shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </AnimatedRow>

            {/* Row 4 */}
            <AnimatedRow>
              <motion.img
                src={MusicScraps}
                className="w-full rounded-xl drop-shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              />
              <div className="relative w-full">
                <motion.img
                  src={PaperNote}
                  alt="Note"
                  initial={{ rotate: 1 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                />
                <p className="absolute top-6 md:top-10 left-6 md:left-10 text-lg md:text-2xl leading-relaxed w-[65%] mt-12 md:mt-16 ml-2 md:ml-6">
                  I relate with music and art that resonate with my feelings and situations.
                </p>
                <motion.img
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={HeadphonesCutout}
                  className="absolute bottom-2 right-2 md:right-4 w-[90px] md:w-[140px] -rotate-6"
                />
              </div>
            </AnimatedRow>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;