import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/img/aquavision/hero-img.png';
import kurukImg from '../assets/img/aquavision/kuruk.png';
import prb1 from '../assets/img/aquavision/prb-1.png';
import prb2 from '../assets/img/aquavision/prb-2.png';
import prb3 from '../assets/img/aquavision/prb-3.png';
import sol1 from '../assets/img/aquavision/sol-1.png';
import ai1 from '../assets/img/aquavision/ai-1.jpg';
import ai2 from '../assets/img/aquavision/ai-2.jpg';
import auvStruct from '../assets/img/aquavision/auv-struct.png';
import dashboard from '../assets/img/aquavision/dashboard.png';
import dashboard1 from '../assets/img/aquavision/dashboard-1.png';
import flow from '../assets/img/aquavision/flow.png';
import Navbar from '../components/Navbar';
import ckt from '../assets/img/aquavision/ckt.png';
import kurukwin from '../assets/img/aquavision/kuruk-win.jpg';
import game1 from '../assets/img/digibridge/game-1.gif';
import game2 from '../assets/img/digibridge/game-2.gif';
import game3 from '../assets/img/digibridge/game-3.gif';

const AquaVision = () => {
  return (
    <>
      <a
        href="/"
        className="fixed top-8 md:top-6 left-4 md:left-6 z-50 flex items-center gap-2 text-xs md:text-sm font-figtree text-darkgray px-3 md:px-4 py-1 md:py-2 rounded-full hover:text-dark hover:font-semibold transition-all duration-400"
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
      <div className="font-figtree text-gray-900 bg-white">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 lg:px-24 pt-16 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
            {/* Left Section - Text & Hero Image */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm font-semibold tracking-widest">AQUAVISION</p>
                <img
                  src={kurukImg}
                  alt="Smart India Hackathon"
                  className="w-20 md:w-24 lg:hidden"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Ocean Pollution Detection & Collection System
              </h1>

              <button className="bg-gray-200 text-gray-800 px-4 py-2 text-sm font-medium rounded-md w-fit">
                Project Showcase
              </button>

              {/* Role / Skills / Team - Mobile only */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm mt-6 lg:hidden">
                <div>
                  <h3 className="font-semibold mb-1">ROLE</h3>
                  <p className="text-gray-600">Developer<br />Dashboard Engineer<br />Prototype Testing</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">SKILLS</h3>
                  <p className="text-gray-600">Full Stack Dev<br />Machine Learning Integration <br />3D Modelling & Simulation</p>
                </div>
                <div className="col-span-2">
                  <h3 className="font-semibold mb-1 text-sm">TEAMMATES</h3>
                  <p className="text-gray-600 text-sm">
                    Raghul D, Udaya S R<br />Guided by Sarojani Maurya (Scientist at NIOT)
                  </p>
                </div>
              </div>

              <img src={heroImg} alt="Hero" className="md:w-7/8 mt-2 -ml-2 md:-ml-6 -mb-10 md:-mb-0" />
            </div>

            {/* Right Section - Role, Skills, Team, TOC, SIH Badge (Desktop only) */}
            <div className="flex flex-col gap-8">
              <img
                src={kurukImg}
                alt="Smart India Hackathon"
                className="w-28 md:w-32 lg:w-40 self-end hidden lg:block"
              />

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm hidden lg:grid">
                <div>
                  <h3 className="font-semibold mb-1">ROLE</h3>
                  <p className="text-gray-600">Developer<br />Dashboard Engineer<br />Prototype Testing</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">SKILLS</h3>
                  <p className="text-gray-600">Full Stack Dev<br />Machine Learning Integration <br />3D Modelling & Simulation</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <h3 className="font-semibold mb-1 text-sm">TEAMMATES</h3>
                <p className="text-gray-600 text-sm">
                  Raghul D, Udaya S R<br />Guided by Sarojani Maurya (Scientist at NIOT)
                </p>
              </div>

              <div className="mt-4 hidden lg:block">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                  <span>📝</span> Table of Contents
                </h3>
                <ol className="text-sm text-gray-700 space-y-1 border border-gray-300 rounded-md p-4">
                  <li><strong>1</strong> The Problem with the Aquatic Ecosystem</li>
                  <li><strong>2</strong> The Solution: AquaVision</li>
                  <li><strong>3</strong> ML-Based Pollution Detection</li>
                  <li><strong>4</strong> Payload to Server</li>
                  <li><strong>5</strong> Dashboard & Analytics</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem-section" className="bg-black text-white py-20 px-4 md:px-12 lg:px-32 space-y-16 w-screen items-center">
          <h2 className="text-2xl md:text-3xl font-semibold">The Problem with the Aquatic Ecosystem</h2>

          <div className="space-y-20">
            <div className="text-center space-y-6">
              <img src={prb1} alt="Problem 1" className="mx-auto max-w-xs animate-pulse" />
              <p className="text-base max-w-xl mx-auto">
                Oceans cover 70% of Earth's surface, hosting a vast ecosystem critical to global biodiversity and climate regulation.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left">
              <img src={prb2} alt="Problem 2" className="w-72 animate-pulse" />
              <p className="text-base max-w-md">
                Pollution, including plastics, oil spills, and chemical runoff, severely threatens marine life and ecosystems, causing widespread environmental damage.
              </p>
            </div>

            <div className="text-center space-y-6">
              <img src={prb3} alt="Problem 3" className="mx-auto max-w-xs animate-pulse" />
              <p className="text-base max-w-xl mx-auto">
                Current monitoring and cleanup methods are often inefficient, costly, and unable to address the scale of ocean pollution effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white text-center py-20 px-4 md:px-12 lg:px-32 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">The Solution: AquaVision</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.3, bounce: 0.2 },
            }}
          >
            <img src={sol1} alt="Solution Logo" className="mx-auto md:w-xl -mb-8 -mt-12" />
          </motion.div>
          <p className="text-base max-w-2xl mx-auto">
            An innovative <strong>ocean pollution detection and collection system</strong> designed to <strong>monitor and mitigate marine pollution</strong>,
            integrating advanced sensors, machine learning, and autonomous technology to protect aquatic ecosystems.
          </p>
        </section>

        {/* AI Section */}
        <section className="bg-white py-20 px-4 md:px-12 lg:px-32 space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold">ML-Based Pollution Detection</h2>
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">01</div>
                <p>
                  <strong>Identify</strong> <br />
                  Machine learning models <strong>analyze sensor data</strong> to detect pollutants like plastics and chemicals,
                  classifying pollution types and assessing concentration levels in real-time.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">02</div>
                <p>
                  <strong>Process</strong> <br />
                  The system <strong>prioritizes high-risk areas</strong> for cleanup based on pollution severity and location,
                  optimizing resource allocation and response strategies.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">03</div>
                <p>
                  <strong>Monitor</strong> <br />
                  <strong>Continuous data updates</strong> track pollution trends, enabling proactive measures and long-term environmental impact assessment.
                </p>
              </div>
            </div>

            <div className="space-y-6 -mb-12 md:-mb-0 md:-mt-26 drop-shadow-xl">
              <img src={ai1} alt="AI Dashboard 1" className="w-full max-w-md mx-auto lg:mx-0" />
              <img src={ai2} alt="AI Dashboard 2" className="w-full max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 px-4 md:px-12 lg:px-32 -mt-0 md:-mt-12 justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Payload Features</h2>
          <img src={auvStruct} alt="Desktop App" className="w-screen -mt-6 md:-mt-0 justify-center drop-shadow-2xl scale-130 md:scale-100" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white">
            <div className="bg-dark p-4 rounded-md">
              <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
              <p>Provides <strong>live data feeds</strong> from sensors to track pollution levels across multiple aquatic regions.</p>
            </div>
            <div className="bg-dark p-4 rounded-md">
              <h3 className="font-bold mb-2">Autonomous Collection</h3>
              <p>Deploys <strong>autonomous drones</strong> and vessels for efficient pollutant collection and removal.</p>
            </div>
            <div className="bg-dark p-4 rounded-md">
              <h3 className="font-bold mb-2">Data Analytics</h3>
              <p>Offers <strong>comprehensive analytics</strong> to identify pollution sources and predict future trends.</p>
            </div>
            <div className="bg-dark p-4 rounded-md">
              <h3 className="font-bold mb-2">Scalable Deployment</h3>
              <p>Designed for <strong>global scalability</strong>, adaptable to various water bodies and pollution types.</p>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="bg-white py-20 px-4 md:px-12 lg:px-32 space-y-16 -mt-21">
          <div className="text-center space-y-4">
            <img src={dashboard} alt="Mobile Hero" className="mx-auto w-84 md:w-108" />
            <h2 className="text-4xl font-bold tracking-wide">DASHBOARD</h2>
            <p className="text-lg font-semibold -mt-5">MONITORING & CONTROL</p>
          </div>

          <div className="bg-[#e1e1e1] text-white py-12 px-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <img src={dashboard1} alt="Mobile Screens" className="mx-auto md:w-[50%] w-[85%] max-w-4xl" />

            <div className=" text-sm space-y-6 lg:w-1/2">
              <h3 className="text-xl font-semibold text-dark">Web Dashboard</h3>
              <p className='text-dark'>
                The AquaVision web app enables real-time monitoring and management of ocean pollution,
                accessible to environmentalists and authorities even in remote areas with limited connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-dark p-4 rounded-lg flex-1">
                  <h4 className="font-bold mb-2">01 Pollution Alerts</h4>
                  <p className="text-xs">
                    Sends real-time notifications about detected pollution spikes,
                    ensuring rapid response to critical environmental threats.
                  </p>
                </div>
                <div className="bg-dark p-4 rounded-lg flex-1">
                  <h4 className="font-bold mb-2">02 Remote Management</h4>
                  <p className="text-xs">
                    Allows users to control and monitor autonomous cleanup devices remotely,
                    optimizing operations in hard-to-reach aquatic regions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <img src={flow} alt="Mobile Features" className="w-full md:w-sm md:-mt-11 max-w-5xl mx-auto lg:mx-0" />
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:mt-27">
              {[
                {
                  title: 'Real-Time Data',
                  desc: 'Provides live updates on pollution levels, ensuring timely decision-making.'
                },
                {
                  title: 'Interactive Maps',
                  desc: 'Visualizes pollution hotspots with dynamic maps for targeted interventions.'
                },
                {
                  title: 'Remote Access',
                  desc: 'Enables monitoring and control of cleanup operations from anywhere.'
                },
                {
                  title: 'Data Sharing',
                  desc: 'Facilitates collaboration by sharing pollution data with environmental agencies.'
                }
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-white bg-dark w-6 h-6 flex items-center justify-center rounded-full text-xs">
                      0{index + 1}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Hubs Section */}
          <section className="bg-white py-16 px-4 md:px-12 lg:px-32 md:-ml-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Payload to Server</h2>
                <p className="text-base text-gray-800">
                  <strong>Efficient data transmission</strong> from sensors and drones to centralized servers for processing.
                </p>
                <p className="text-base text-gray-800">
                  <strong>Secure and reliable</strong> communication ensures real-time data integrity.
                </p>
                <p className="text-base text-gray-800">
                  Supports <strong>large-scale operations</strong>, enabling seamless integration with global monitoring systems.
                </p>
              </div>

              <img
                src={ckt}
                alt="Payload System"
                className="md:w-172 w-full max-w-md mx-auto rounded-xl"
              />
            </div>
          </section>
          {/* PDF and Video Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white -mt-32">
        <h1 className='text-center justify-center mb-6 text-dark font-semibold text-lg'>Project Material and Video</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto">
          {/* PDF Viewer */}
          <div className="md:w-lg w-full h-[500px] md:h-[290px] md:-ml-24">
            <iframe
              src="/pdfs/aquavision-ppt.pdf"
              className="w-full h-full border rounded-xl shadow-md"
              title="AquaVision PDF"
            />
          </div>

          {/* Video Player */}
          <div className="w-full md:w-lg aspect-video rounded-xl overflow-hidden shadow-md">
            <video controls className="w-full h-full object-cover rounded-xl">
              <source src="/videos/avdemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

          {/* kuruk Team Section */}
          <section className="bg-white py-20 px-4 md:px-12 lg:px-32 text-center">
            <div className="mx-auto w-full max-w-3xl px-2">
              <img
                src={kurukwin}
                alt="SIH Final Team"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-base md:text-lg font-semibold mt-6 text-gray-800">
              The Team winning the <br />
              <span className="text-xl md:text-2xl font-bold text-black">
                Underwater Robotics Hackathon 2025
              </span>
            </h3>
          </section>

          {/* CTA Section */}
          <section className="bg-white border-t py-12 px-4 md:px-12 lg:px-32 text-center">
            <p className="text-sm md:text-base font-medium text-gray-500 mb-2">Done Reading?</p>
            <h3 className="text-lg md:text-xl font-extrabold mb-6 text-black">
              Check out my other projects
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/digibridge"
                className="bg-black text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
              >
                DigiBridge
              </a>
              <a
                href="/clickshield"
                className="bg-black text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
              >
                ClickShield
              </a>
            </div>
          </section>
        </section>
        
      </div>
    </>
  );
};

export default AquaVision;