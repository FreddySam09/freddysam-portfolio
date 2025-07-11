import React from 'react'
import Lanyard from '../components/Lanyard'
import ReactIcon from '../assets/img/react-icon.png'
import NextIcon from '../assets/img/nextjs-icon.png'
import FigmaIcon from '../assets/img/figma-icon.png'
import JavascriptIcon from '../assets/img/javascript-icon.png'
import ThreeIcon from '../assets/img/threejs-icon.png'
import TailwindIcon from '../assets/img/tailwind-icon.png'
import NotionIcon from '../assets/img/notion-icon.png'
import PhotoshopIcon from '../assets/img/photoshop-icon.png'
import PythonIcon from '../assets/img/python-icon.svg'
import IllustratorIcon from '../assets/img/illustrator-icon.png'
import PlaycanvasIcon from '../assets/img/playcanvas-icon.png'
import BlenderIcon from '../assets/img/blender-icon.png'
import NiotLogo from '../assets/img/niot-logo.png'
import NanotchnologiesLogo from '../assets/img/nanotechnology-logo.png'
import IeeeLogo from '../assets/img/ieee-logo.png'
import Frontend from '../assets/img/frontend.svg'
import Backend from '../assets/img/backend.svg'
import UiUx from '../assets/img/ui-ux.svg'
import GraphicDesign from '../assets/img/graphic-design.svg'

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
    description: "Created and integrated 3D models in PlayCanvas for immersive web experiences."
  },
  {
    logo: IeeeLogo,
    role: "Webmaster",
    company: "IEEE Magnetics Society Student Chapter",
    duration: "2022 – Present",
    description: "Designed and developed custom websites, landing pages, and interactive apps using modern stacks."
  }
];

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
            <img
              src={skill.src}
              alt={skill.label}
              className="w-10 md:w-12 lg:w-16 hover:scale-110 transition-all duration-300 rounded-md"
            />
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
      <h1 className='text-center text-dark font-bold text-2xl mt-16 -mb-8'>SERVICES</h1>
      <div className='flex flex-wrap justify-center items-center mt-12'>
        {/*Frontend*/}
        <div className='flex flex-wrap justify-center items-center mt-6 md:mt-0'>
          <img src={Frontend} alt="frontend-doodle" className='w-48'/>
          <div className='flex flex-col md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1 '>Front-End <br />Development</h1>
            <p className='text-lg text-gray-600 leading-5 w-70 mt-2'>From Vanilla js, to Frameworks like React and Next js, I'm capable of developing amazing sites quick and well!</p>
          </div>
        </div>
        {/* Graphic Design */}
        <div className='flex flex-wrap justify-center items-center mt-6 md:mt-0'>
          <img src={GraphicDesign} alt="graphicdesign-doodle" className='w-48'/>
          <div className='flex flex-col md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1 '>Graphic Design</h1>
            <p className='text-lg text-gray-600 leading-5 w-70 mt-2'>I have a natural eye for good and appealing designs, have the skillset to pull them off as well</p>
          </div>
          {/* Ui/Ux */}
        <div className='flex flex-wrap justify-center items-center mt-8 md:mt-0'>
          <img src={UiUx} alt="ui-ux-doodle" className='w-48'/>
          <div className='flex flex-col md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1 '>UI/UX Design</h1>
            <p className='text-lg text-gray-600 leading-5 w-70 mt-2'>I love designing user interfaces and plan designs based on how I want users to experience the platform.</p>
          </div>
        </div>
        {/* Integration */}
        <div className='flex flex-wrap justify-center items-center mt-6 md:mt-0'>
          <img src={Backend} alt="integration-doodle" className='w-48'/>
          <div className='flex flex-col md:ml-4 text-center md:text-start'>
            <h1 className='text-3xl text-dark font-semibold leading-7 mb-1 '>Integration</h1>
            <p className='text-lg text-gray-600 leading-5 w-70 mt-2'>Integrating Software Platforms with other technologies such as AI, Hardware & Communication Services</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage;
