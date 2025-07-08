import React from 'react';
import { motion } from 'framer-motion';

// Icons
import reactIcon from '../assets/img/react-icon.png';
import nextjsIcon from '../assets/img/nextjs-icon.png';
import flaskIcon from '../assets/img/flask-icon.png';
import prismaIcon from '../assets/img/prisma-icon.png';
import supabaseIcon from '../assets/img/supabase-icon.png';
import mongodbIcon from '../assets/img/mongodb-icon.png';
import reactNativeIcon from '../assets/img/react-native-icon.png';
import photoshopIcon from '../assets/img/photoshop-icon.png';
import illustratorIcon from '../assets/img/illustrator-icon.png';
import canvaIcon from '../assets/img/canva-icon.png';
import figmaIcon from '../assets/img/figma-icon.png';
import framerIcon from '../assets/img/framer-icon.png';
import javascriptIcon from '../assets/img/javascript-icon.png';
import typescriptIcon from '../assets/img/typescript-icon.png';
import pythonIcon from '../assets/img/python-icon.svg';
import javaIcon from '../assets/img/java-icon.png';
import cIcon from '../assets/img/c-icon.png';
import cppIcon from '../assets/img/cpp-icon.png';
import csharpIcon from '../assets/img/csharp-icon.png';
import blenderIcon from '../assets/img/blender-icon.png';
import threejsIcon from '../assets/img/threejs-icon.png';
import playcanvasIcon from '../assets/img/playcanvas-icon.png';
import notionIcon from '../assets/img/notion-icon.png';
import loopIcon from '../assets/img/loop-icon.png';
import anytypeIcon from '../assets/img/anytype-icon.svg';

const SkillsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const layout = [
    {
      title: 'Front-End Development',
      icons: [reactIcon, nextjsIcon],
    },
    {
      title: 'Full Stack Development',
      icons: [reactIcon, nextjsIcon, flaskIcon, pythonIcon],
    },
    {
      title: 'Mobile App Development',
      icons: [reactNativeIcon, pythonIcon],
    },
    {
      title: 'Graphic Design',
      icons: [photoshopIcon, illustratorIcon, canvaIcon],
    },
    {
      title: 'UI Design',
      icons: [figmaIcon, framerIcon],
    },
    {
      title: 'Programming',
      icons: [
        javascriptIcon,
        typescriptIcon,
        pythonIcon,
        cIcon,,
        javaIcon,
      ],
    },
    {
      title: '3D Development',
      icons: [threejsIcon, blenderIcon, playcanvasIcon],
    },
    {
      title: 'Project Management',
      icons: [notionIcon, loopIcon, anytypeIcon],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative w-88 md:w-120 font-figtree"
      initial={{ y: window.innerWidth < 768 ? '-100vh' : '100vw' }}
      animate={{ y: window.innerWidth < 768 ? 0 : 0, x: window.innerWidth >= 768 ? 0 : 0 }}
      exit={{ y: window.innerWidth < 768 ? '-100vh' : '100vw' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="bg-gradient-to-b rounded-xl p-6 md:p-8 w-[85%] border border-gray-100 drop-shadow-xl relative overflow-hidden"
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:right-6 text-gray-500 hover:text-red-500 text-2xl md:text-3xl font-bold thumb-c"
          aria-label="Close"
        >
          ×
        </button>

        <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto custom-scroll mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3">
            {layout.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2 md:space-y-3"
              >
                <h3 className="text-base md:text-lg font-semibold leading-tight text-gray-800">{section.title}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {section.icons.map((icon, idx) => (
                    <motion.div
                      key={idx}
                      className="p-1 bg-white rounded-md border border-gray-200 hover:shadow-md transition-transform transform hover:scale-105"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={icon}
                        alt=""
                        className="w-6 md:w-8 h-6 md:h-8 object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsModal;