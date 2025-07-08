import React from 'react';
import { motion } from 'framer-motion';
import sihLogo from '../assets/img/sihlogo.png';
import annaUniversityLogo from '../assets/img/anna-university-logo.png';
import psgLogo from '../assets/img/psg-logo.png';
import ieeeLogo from '../assets/img/ieee-logo.png';

const AchievementsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const achievements = [
    {
      title: 'Smart India Hackathon 2023 Finalist',
      description: 'Reached the finals of the national-level Smart India Hackathon 2023, showcasing innovative solutions to real-world problems.',
      image: sihLogo,
    },
    {
      title: 'Smart India Hackathon 2024 Finalist',
      description: 'Advanced to the finals of Smart India Hackathon 2024, demonstrating expertise in problem-solving and teamwork.',
      image: sihLogo,
    },
    {
      title: 'Underwater Robotics Hackathon Anna University 2025 Winner',
      description: 'Won the Underwater Robotics Hackathon at Anna University in 2025, excelling in designing and implementing robotics solutions.',
      image: annaUniversityLogo,
    },
    {
      title: 'PSG iTechHackFest 2023 Top Ten',
      description: 'Secured a top-ten position in the PSG iTechHackFest 2023, recognized for innovative technological contributions.',
      image: psgLogo,
    },
    {
      title: 'IEEE SIGHT Grant of $4890',
      description: 'Received a $4890 grant from IEEE SIGHT to fund impactful community-driven technology projects.',
      image: ieeeLogo,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="relative w-full max-w-[360px] md:max-w-md font-figtree"
      initial={{ y: window.innerWidth < 768 ? '-100vh' : '100vw' }}
      animate={{ y: window.innerWidth < 768 ? 0 : 0, x: window.innerWidth >= 768 ? 0 : 0 }}
      exit={{ y: window.innerWidth < 768 ? '-100vh' : '100vw' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="bg-gradient-to-b drop-shadow-xl rounded-xl p-6 md:p-8 w-full border border-gray-200 relative"
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:right-6 text-gray-500 hover:text-red-500 text-2xl md:text-3xl font-bold thumb-c"
          aria-label="Close"
        >
          ×
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2 custom-scroll mt-6 space-y-6 md:space-y-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-2 p-3 md:p-4 rounded-lg bg-gray-50 hover:drop-shadow-xl transition duration-300 transform hover:scale-90"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={ach.image}
                alt={ach.title}
                className="w-12 md:w-16 h-12 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{ach.title}</h3>
                <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AchievementsModal;