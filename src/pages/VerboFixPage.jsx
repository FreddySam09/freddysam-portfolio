import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/img/verbofix/hero-img.png';
import kurukImg from '../assets/img/verbofix/kuruk.png';
import prb1 from '../assets/img/verbofix/prb-1.png';
import prb2 from '../assets/img/verbofix/prb-2.png';
import prb3 from '../assets/img/verbofix/prb-3.png';
import sol1 from '../assets/img/verbofix/sol-1.png';
import ai1 from '../assets/img/verbofix/ai-1.png';
import ai2 from '../assets/img/verbofix/ai-2.png';
import auvStruct from '../assets/img/verbofix/auv-struct.png';
import auvStructDark from '../assets/img/verbofix/auv-struct-dark.png';
import dashboard from '../assets/img/verbofix/dashboard.png';
import dashboard1 from '../assets/img/verbofix/dashboard-1.png';
import flow from '../assets/img/verbofix/flow.png';
import Navbar from '../components/Navbar';
import ckt from '../assets/img/aquavision/ckt.png';
import kurukwin from '../assets/img/aquavision/kuruk-win.jpg';
import { useTheme } from '../context/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const VerboFixPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="page-verbofix">
      <a
        href="/"
        className="fixed top-8 md:top-6 left-4 md:left-6 z-50 flex items-center gap-2 text-xs md:text-sm font-figtree text-darkgray dark:text-gray-400 px-3 md:px-4 py-1 md:py-2 rounded-full hover:text-dark dark:hover:text-gray-100 hover:font-semibold transition-all duration-400"
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

      <div className="font-figtree text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0d0d0d]">
        {/* Hero Section */}
        <motion.section
          className="relative px-6 md:px-12 lg:px-24 pt-16 bg-white dark:bg-[#101010]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
            {/* Left Section - Text & Hero Image */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              variants={fadeUp}
              custom={0.1}
            >
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm font-semibold tracking-widest dark:text-gray-200">VERBOFIX</p>
                <img
                  src={kurukImg}
                  alt="Smart India Hackathon"
                  className="w-20 md:w-24 lg:hidden"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white">
                AI - Powered Platform for Speech Dysfluent People
              </h1>

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium rounded-md w-fit"
              >
                Project Showcase
              </motion.button>

              {/* Role / Skills / Team - Mobile only */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm mt-6 lg:hidden"
                variants={fadeUp}
              >
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">ROLE</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Developer<br />UI/UX Designer<br />Program Analyst</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">SKILLS</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Development<br />Machine Learning Integration <br />Graphic Design</p>
                </div>
                <div className="col-span-2">
                  <h3 className="font-semibold mb-1 text-sm dark:text-gray-200">TEAMMATES</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Arun G, Kamalraj S, Vasanth S
                  </p>
                </div>
              </motion.div>

              <motion.img
                src={heroImg}
                alt="Hero"
                className="md:w-7/8 mt-2 -ml-2 md:-ml-6 -mb-10 md:-mb-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="flex flex-col gap-8"
              variants={fadeUp}
              custom={0.2}
            >
              <img
                src={kurukImg}
                alt="Smart India Hackathon"
                className="w-28 md:w-32 lg:w-40 self-end hidden lg:block"
              />

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm hidden lg:grid">
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">ROLE</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Developer<br />UI/UX Designer<br />Program Analyst</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">SKILLS</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Development<br />Machine Learning Integration <br />Graphic Design</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <h3 className="font-semibold mb-1 text-sm dark:text-gray-200">TEAMMATES</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Arun G, Kamalraj S, Vasanth S
                </p>
              </div>

              <motion.div
                className="mt-4 hidden lg:block"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2 dark:text-gray-200">
                  <span>📝</span> Table of Contents
                </h3>
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 border border-gray-300 dark:border-gray-700 rounded-md p-4">
                  <li><strong>1</strong> The Problem of Speech Dysfluency</li>
                  <li><strong>2</strong> The Solution: VerboFix</li>
                  <li><strong>3</strong> ML-Based Voice Analysis</li>
                  <li><strong>4</strong> Connecting our Users</li>
                  <li><strong>5</strong> ML Analytics</li>
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section
          id="problem-section"
          className="bg-black text-white py-20 px-4 md:px-12 lg:px-32 space-y-16 w-screen items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">The Problem of Speech Dysfluency</h2>

          <motion.div
            className="space-y-20"
            variants={fadeUp}
            custom={0.2}
          >
            <div className="text-center space-y-6">
              <motion.img
                src={prb1}
                alt="Problem 1"
                className="mx-auto max-w-xs animate-pulse"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-base max-w-xl mx-auto text-gray-200">
                Speech dysfluency (stammering/stuttering) affects millions in India, with estimates around 11-12 million people, especially children (2-6 yrs).
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left">
              <motion.img
                src={prb2}
                alt="Problem 2"
                className="w-72 animate-pulse"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-base max-w-md text-gray-200">
                It causes communication difficulties, social stigma, emotional distress (anxiety, shame, low self-esteem), academic struggles (avoiding class), and career limitations
              </p>
            </div>

            <div className="text-center space-y-6">
              <motion.img
                src={prb3}
                alt="Problem 3"
                className="mx-auto max-w-xs animate-pulse"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-base max-w-xl mx-auto text-gray-200">
                leading to social withdrawal, fear of speaking, and reduced quality of life, often worsening in stressful situations. 
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          className="bg-white dark:bg-[#121212] text-center py-20 px-4 md:px-12 lg:px-32 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-100">The Solution: VerboFix</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          >
            <img src={sol1} alt="Solution Logo" className="mx-auto w-sm md:w-md -mb-8 -mt-12 mb-2" />
          </motion.div>
          <p className="text-base max-w-2xl mx-auto text-gray-800 dark:text-gray-300">
            An innovative <strong>speech dysfluency detection and correction system</strong> designed to{' '}
            <strong>monitor and mitigate stuttering and stammering</strong>,
            integrating advanced machine learning, and real life conversations to improve an individual's speech characteristics.
          </p>
        </motion.section>

        {/* AI Section */}
        <motion.section
          className="bg-white dark:bg-[#101010] py-20 px-4 md:px-12 lg:px-32 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold dark:text-gray-100">ML-Based Pollution Detection</h2>
          <motion.div
            className="flex flex-col lg:flex-row gap-12 justify-between items-start"
            variants={fadeUp}
            custom={0.2}
          >
            <motion.div
              className="space-y-6 max-w-xl text-gray-800 dark:text-gray-300"
              variants={fadeUp}
            >
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark dark:bg-[#2f2f2f] w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">01</div>
                <p>
                  <strong>Identify</strong> <br />
                  Machine learning model <strong>analyzes audio data</strong> to detect <strong>stuttered fragments, frequency and intensity,</strong>
                  classifying users with different severity levels in a short time.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark dark:bg-[#2f2f2f] w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">02</div>
                <p>
                  <strong>Process</strong> <br />
                  The system <strong>prioritizes high-risk problems</strong> for cleanup based on severity and intensity,
                  optimizing resource allocation and response strategies.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white bg-dark dark:bg-[#2f2f2f] w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">03</div>
                <p>
                  <strong>Monitor</strong> <br />
                  <strong>Continuous data updates</strong> track stutter trends, enabling proactive measures and long-term user impact assessment.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 -mb-12 md:-mb-0 md:-mt-26 drop-shadow-xl"
              variants={fadeUp}
              custom={0.3}
            >
              <motion.img
                src={ai1}
                alt="AI Dashboard 1"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={ai2}
                alt="AI Dashboard 2"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="bg-white dark:bg-[#121212] py-20 px-4 md:px-12 lg:px-32 -mt-0 md:-mt-12 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 dark:text-gray-100">Platform Features</h2>
          <motion.img
            src={isDarkMode ? auvStructDark : auvStruct}
            alt="AUV Structure"
            className="w-screen -mt-6 md:-mt-0 justify-center drop-shadow-2xl scale-110 md:scale-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          />

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white"
            variants={fadeUp}
          >
            <motion.div
              className="bg-[#476a4d] dark:bg-[#2f2f2f] p-4 rounded-md hover:scale-105 transition-transform duration-300"
              variants={fadeUp}
              custom={0.1}
            >
              <h3 className="font-bold mb-2">Online Call Sessions</h3>
              <p>Allows <strong>users to have one-on-one sessions</strong> with well vocal volunteers, just having normal conversations</p>
            </motion.div>
            <motion.div
              className="bg-dark dark:bg-[#2f2f2f] p-4 rounded-md hover:scale-105 transition-transform duration-300"
              variants={fadeUp}
              custom={0.2}
            >
              <h3 className="font-bold mb-2">Session Analysis</h3>
              <p>Session <strong>audio recording is analyzed</strong> by the Machine Learning Model, and report generation takes place in the background.</p>
            </motion.div>
            <motion.div
              className="bg-[#476a4d] dark:bg-[#2f2f2f] p-4 rounded-md hover:scale-105 transition-transform duration-300"
              variants={fadeUp}
              custom={0.3}
            >
              <h3 className="font-bold mb-2">Data Analytics</h3>
              <p>Report Offers <strong>comprehensive analytics</strong> to identify problem sources and predict improvement steps.</p>
            </motion.div>
            <motion.div
              className="bg-dark dark:bg-[#2f2f2f] p-4 rounded-md hover:scale-105 transition-transform duration-300"
              variants={fadeUp}
              custom={0.4}
            >
              <h3 className="font-bold mb-2">Scalable Deployment</h3>
              <p>Designed for <strong>global scalability</strong>, adaptable to large user bases and real time vide/audio calls.</p>
            </motion.div>
          </motion.div>
        </motion.section>
        {/* Dashboard Section */}
        <motion.section
          className="bg-white dark:bg-[#101010] py-20 px-4 md:px-12 lg:px-32 space-y-16 -mt-21"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <motion.div className="text-center space-y-4" variants={fadeUp}>
            <motion.img
              src={dashboard}
              alt="Dashboard"
              className="mx-auto w-84 md:w-108"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-4xl font-bold tracking-wide dark:text-gray-100">DASHBOARD</h2>
            <p className="text-lg font-semibold -mt-5 dark:text-gray-300">MONITORING & CONTROL</p>
          </motion.div>

          <motion.div
            className="bg-[#e1e1e1] dark:bg-[#2a2a2a] text-white py-12 px-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
            variants={fadeUp}
          >
            <motion.img
              src={dashboard1}
              alt="Dashboard Screens"
              className="mx-auto md:w-[50%] w-[85%] max-w-4xl rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            <div className="text-sm space-y-6 lg:w-1/2">
              <h3 className="text-xl font-semibold text-dark dark:text-gray-100">Web Dashboard</h3>
              <p className="text-dark dark:text-gray-300">
                The VerboFix web platform enables structured, real-time speech therapy through live call sessions, intelligent user–speaker pairing, and continuous feedback-driven improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.div
                  className="bg-[#476a4d] dark:bg-[#3a3a3a] p-4 rounded-lg flex-1 hover:scale-105 transition-transform duration-300"
                  variants={fadeUp}
                >
                  <h4 className="font-bold mb-2">01 Live Therapy Sessions</h4>
                  <p className="text-xs text-gray-200">
                    Facilitates real-time audio and video call sessions between users and assigned speakers, ensuring focused, distraction-free therapy with session tracking and controlled session flow.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-dark dark:bg-[#3a3a3a] p-4 rounded-lg flex-1 hover:scale-105 transition-transform duration-300"
                  variants={fadeUp}
                >
                  <h4 className="font-bold mb-2">02 Pairing & Feedback System</h4>
                  <p className="text-xs text-gray-200">
                    Intelligently manages user–speaker pairings and collects post-session feedback from both sides, enabling consistent therapist assignment, quality monitoring, and personalized therapy refinement.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-20 flex flex-col lg:flex-row items-start gap-12"
            variants={fadeUp}
          >
            <div className="flex-1">
              <motion.img
                src={flow}
                alt="Data Flow"
                className="w-full md:w-md md:mt-21 mt-0 max-w-5xl mx-auto lg:mx-0 rounded-lg"
                whileHover={{ scale: 1.03 }}
              />
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:mt-27 text-gray-800 dark:text-gray-300">
              {[
                { title: 'High Classification Accuracy', desc: 'Achieves reliable differentiation between fluent and stammered speech with minimal misclassification, ensuring trustworthy session analysis.' },
                { title: 'Low False Detection Rate', desc: 'Maintains very low false positives and false negatives, reducing incorrect fluency judgments and improving user confidence in reports.' },
                { title: 'Real-Time Inference', desc: 'Processes audio segments efficiently to deliver near real-time stammer detection during or immediately after sessions.' },
                { title: 'Data-Driven Evaluation', desc: 'Uses confusion matrix–based evaluation to continuously validate and improve model performance across diverse speech patterns.' }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <h4 className="font-bold mb-2 flex items-center gap-2 dark:text-gray-200">
                    <span className="text-white bg-dark dark:bg-[#3a3a3a] w-6 h-6 flex items-center justify-center rounded-full text-xs">
                      0{index + 1}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Payload Section */}
        <motion.section
          className="bg-white dark:bg-[#121212] py-16 px-4 md:px-12 lg:px-32 md:-ml-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
        </motion.section>

        {/* PDF and Video Section */}
        <motion.section
          className="py-20 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0f0f0f] -mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h1 className="text-center justify-center mb-8 text-dark dark:text-gray-100 font-semibold text-lg">
            Project Material
          </h1>

          <div className="grid grid-cols-1 gap-12 items-center max-w-7xl mx-auto -mb-8">
            {/* PDF Viewer */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
            >
              <iframe
                src="/pdfs/verbofix-ppt.pdf"
                className="w-full max-w-2xl h-[320px] md:h-[360px] border rounded-xl shadow-md dark:border-gray-700"
                title="AquaVision PDF"
              />
            </motion.div>
          </div>
        </motion.section>


        {/* kuruk Team Section */}
        <motion.section
          className="bg-white dark:bg-[#121212] py-20 px-4 md:px-12 lg:px-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="bg-white dark:bg-[#0d0d0d] border-t py-12 px-4 md:px-12 lg:px-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 mb-2">Done Reading?</p>
          <h3 className="text-lg md:text-xl font-extrabold mb-6 text-black dark:text-gray-100">
            Check out my other projects
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeUp}
          >
            <a
              href="/digibridge"
              className="bg-black dark:bg-gray-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 dark:hover:bg-niceorange transition"
            >
              DigiBridge
            </a>
            <a
              href="/aquavision"
              className="bg-black dark:bg-gray-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 dark:hover:bg-niceorange transition"
            >
              AquaVision
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default VerboFixPage;
