import React from 'react';
import { motion } from 'framer-motion';
import Lanyard from '../components/Lanyard';
import ReactIcon from '../assets/img/react-icon.png';
import NextIcon from '../assets/img/nextjs-icon.png';
import FigmaIcon from '../assets/img/figma-icon.png';
import JavascriptIcon from '../assets/img/javascript-icon.png';
import ThreeIcon from '../assets/img/threejs-icon.png';
import TailwindIcon from '../assets/img/tailwind-icon.png';
import NotionIcon from '../assets/img/notion-icon.png';
import PhotoshopIcon from '../assets/img/photoshop-icon.png';
import PythonIcon from '../assets/img/python-icon.svg';
import IllustratorIcon from '../assets/img/illustrator-icon.png';
import PlaycanvasIcon from '../assets/img/playcanvas-icon.png';
import BlenderIcon from '../assets/img/blender-icon.png';
import NiotLogo from '../assets/img/niot-logo.png';
import NanotchnologiesLogo from '../assets/img/nanotechnology-logo.png';
import IeeeLogo from '../assets/img/ieee-logo.png';
import Frontend from '../assets/img/frontend.svg';
import Backend from '../assets/img/backend.svg';
import UiUx from '../assets/img/ui-ux.svg';
import GraphicDesign from '../assets/img/graphic-design.svg';

const skills = [
  { src: ReactIcon, label: "React.js" },
  { src: NextIcon, label: "Next.js" },
  { src: JavascriptIcon, label: "JavaScript" },
  { src: PythonIcon, label: "Python" },
  { src: FigmaIcon, label: "Figma" },
  { src: TailwindIcon, label: "Tailwind CSS" },
  { src: NotionIcon, label: "Notion" },
  { src: ThreeIcon, label: "Three.js" },
  { src: PlaycanvasIcon, label: "PlayCanvas" },
  { src: IllustratorIcon, label: "Illustrator" },
  { src: BlenderIcon, label: "Blender" },
  { src: PhotoshopIcon, label: "Photoshop" }
];

const experienceData = [
  {
    logo: NiotLogo,
    role: "Student Intern",
    company: "National Institute Of Ocean Technology",
    duration: "April 2024 – May 2024",
    description: "Hands-on working Experience on AUV Communication Protocols & Developing User Dashboards for Underwater Operations."
  },
  {
    logo: NanotchnologiesLogo,
    role: "Factory Intern",
    company: "Nanotechnologies Pvt Ltd.",
    duration: "July 2024 – August 2024",
    description: "Hands on Experience with Control Systems, dashboard integration and PLC Programming in industry scale automation systems."
  },
  {
    logo: IeeeLogo,
    role: "Webmaster",
    company: "IEEE Magnetics Society Student Chapter",
    duration: "2022 – Present",
    description: "Designed and managed the official webpage of the the Student Chapter of IEEE Magnetics Society of Sri Sairam Engineering College."
  }
];

const Timeline = () => {
  return (
    <div className="relative max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-dark font-bold text-3xl mb-16">EXPERIENCE</h1>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div>

        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-20 flex flex-col sm:flex-row items-center sm:items-start"
            >
              {/* Content block */}
              <div
                className={`
                  sm:w-1/2 w-full px-4 z-10
                  ${isLeft ? "sm:pr-10 sm:justify-end sm:text-right" : "sm:pl-10 sm:justify-start sm:text-left"}
                  flex justify-center text-center sm:text-inherit
                `}
              >
                <div className="bg-light p-6 rounded-md border-2 border-dark shadow-md max-w-sm w-full">
                  <img src={item.logo} alt={item.company} className="w-16 h-16 object-contain mb-4 mx-auto sm:mx-0" />
                  <h3 className="text-xl font-semibold text-dark">{item.role}</h3>
                  <p className="text-lg font-medium text-gray-800">{item.company}</p>
                  <p className="text-sm text-gray-600">{item.duration}</p>
                  <p className="text-base text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:w-5 w-6 md:h-5 h-6 md:-mt-0 -mt-8 bg-dark rounded-full z-20 border-4 border-white"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      {/* Back to Home */}
      <a
        href="/"
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 flex items-center gap-2 text-xs md:text-sm font-figtree text-darkgray px-3 md:px-4 py-1 md:py-2 rounded-full hover:text-dark hover:font-semibold transition-all duration-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 md:w-4 h-3 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Home
      </a>

      {/* Lanyard */}
      <div className='-mt-4'>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Intro Text */}
      <p className='text-2xl justify-center text-center text-dark font-sue -mt-38 md:-mt-30 font-semibold'>
        Hey I'm <span className='font-sue text-4xl ml-1 top-2'>Freddy Sam</span>
      </p>
      <p className='font-figtree mt-3 font-semibold text-gray-800 text-center animate-pulse'>
        Spin my card around till u see me
      </p>

      {/* About Text */}

      <div className='text-center items-center justify-center mt-21'>
        <h1 className='font-semibold font-figtree md:text-3xl text-2xl text-dark'>An Artist Turned Developer</h1>
        <h1 className='font-medium font-figtree md:text-xl text-lg leading-5 text-gray-600'>
          Addicted to Building Applications that <br /><span className='font-bold mt-1'>Stand out from the rest</span>
        </h1>
      </div>


      {/* Skill Icons */}

      <div className='flex flex-wrap gap-4 justify-center items-center md:mt-10 mt-6 px-6 md:px-0'>
        {skills.map((skill, index) => (
          <div key={index} className="relative group flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
            <img
              src={skill.src}
              alt={skill.label}
              className="w-10 md:w-12 lg:w-16 hover:scale-110 transition-all duration-300 rounded-md"
            />
            </motion.div>
            {/* Tooltip for desktop */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
              {skill.label}
            </div>
            {/* Label below icon for mobile only */}
            <p className="mt-1 text-xs text-center text-gray-600 font-figtree block md:hidden">
              {skill.label}
            </p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <h1 className='text-center text-dark font-bold text-2xl mt-16 mb-8'>SERVICES</h1>
      <div className='flex flex-col justify-center items-center gap-6 max-w-7xl mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row gap-12 items-center justify-center'>
        {/* Frontend */}
        <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-[calc(50%-1.5rem)] mb-6'>
          <img src={Frontend} alt="frontend-doodle" className='w-42' />
          <div className='flex flex-col mt-4 md:mt-0 md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1'>Front-End Development</h1>
            <p className='text-lg text-gray-600 leading-5 mt-2 w-70 ml-6 md:ml-0'>From Vanilla js, to Frameworks like React and Next js, I'm capable of developing amazing sites quick and well!</p>
          </div>
        </div>
        {/* Graphic Design */}
        <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-[calc(50%-1.5rem)] mb-6'>
          <img src={GraphicDesign} alt="graphicdesign-doodle" className='w-38' />
          <div className='flex flex-col mt-4 md:mt-0 md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1'>Graphic Design</h1>
            <p className='text-lg text-gray-600 leading-5 mt-2 w-70'>I have a natural eye for good and appealing designs, have the skillset to pull them off as well</p>
          </div>
        </div>
        </div>
        <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
        {/* UI/UX */}
        <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-[calc(50%-1.5rem)] mb-6'>
          <img src={UiUx} alt="ui-ux-doodle" className='w-38' />
          <div className='flex flex-col mt-4 md:mt-0 md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1'>UI/UX Design</h1>
            <p className='text-lg text-gray-600 leading-5 mt-2 w-70'>I love designing user interfaces and plan designs based on how I want users to experience the platform.</p>
          </div>
        </div>
        {/* Integration */}
        <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-[calc(50%-1.5rem)] mb-6'>
          <img src={Backend} alt="integration-doodle" className='w-40' />
          <div className='flex flex-col mt-4 md:mt-0 md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1'>Integration</h1>
            <p className='text-lg text-gray-600 leading-5 mt-2 w-70'>Integrating Software Platforms with other technologies such as AI, Hardware & Communication Services</p>
          </div>
        </div>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </>
  );
};

export default AboutPage;