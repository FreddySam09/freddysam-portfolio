import React from 'react';
import { motion } from 'framer-motion';
import niotLogo from '../assets/img/niot-logo.png';
import nanotechnologyLogo from '../assets/img/nanotechnology-logo.png';
import ieeeLogo from '../assets/img/ieee-logo.png';

const ExperienceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const experiences = [
    {
      title: 'Student Intern at NIOT',
      duration: 'March 2024 - April 2024',
      description:
        'Contributed to research and development projects at the National Institute of Ocean Technology, focusing on innovative solutions for marine technology.',
      image: niotLogo,
    },
    {
      title: 'Factory Intern at Nanotechnologies',
      duration: 'May 2023 - July 2023',
      description:
        'Worked on cutting-edge nanotechnology applications, assisting in the development and testing of nanomaterials for industrial use.',
      image: nanotechnologyLogo,
    },
    {
      title: 'Webmaster at IEEE MS SEC',
      duration: 'October 2023 - Present',
      description:
        'Managed and maintained the IEEE Magnetics Society Student Activities website at my college, enhancing user experience and implementing modern web technologies.',
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
        className="bg-gradient-to-b rounded-xl p-6 md:p-8 w-full drop-shadow-xl border border-gray-50 relative"
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

        <motion.div
          className="space-y-6 md:space-y-8 max-h-[60vh] md:max-h-[70vh] overflow-y-auto custom-scroll"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-1 p-3 md:p-4 rounded-lg bg-gray-50 hover:shadow-lg transition normal-c duration-300 transform hover:scale-90 cursor-pointer"
              variants={itemVariants}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-12 md:w-16 h-12 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-xs md:text-sm font-semibold text-gray-600 mt-1">{exp.duration}</p>
                <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;