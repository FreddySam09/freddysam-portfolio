import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/img/digibridge/hero-img.png';
import sihImg from '../assets/img/digibridge/sih.png';
import sihImgDark from '../assets/img/digibridge/sih-dark.png';
import prb1 from '../assets/img/digibridge/prb-1.png';
import prb2 from '../assets/img/digibridge/prb-2.png';
import prb3 from '../assets/img/digibridge/prb-3.png';
import sol1 from '../assets/img/digibridge/sol-1.png';
import ai1 from '../assets/img/digibridge/ai-1.png';
import ai2 from '../assets/img/digibridge/ai-2.png';
import desktopHead from '../assets/img/digibridge/desktop-head.png';
import mobileHead from '../assets/img/digibridge/mobile-head.png';
import mobile1 from '../assets/img/digibridge/mobile-1.png';
import mobile2 from '../assets/img/digibridge/mobile-2.png';
import Navbar from '../components/Navbar';
import hub from '../assets/img/digibridge/hub.png';
import sihfinal from '../assets/img/digibridge/sih-final.jpg';
import game1 from '../assets/img/digibridge/game-1.gif';
import game2 from '../assets/img/digibridge/game-2.gif';
import game3 from '../assets/img/digibridge/game-3.gif';
import { useTheme } from '../context/ThemeContext';
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
};

const DigiBridgePage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className='page-digibridge'>
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

      <div className="font-figtree text-gray-900 dark:text-gray-100 bg-light dark:bg-[#0e0e0e] overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          className="relative px-6 md:px-12 lg:px-24 pt-16 bg-light dark:bg-[#121212]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                className="flex justify-between items-center"
                custom={0.1}
                variants={fadeUp}
              >
                <p className="uppercase text-sm font-semibold tracking-widest dark:text-gray-200">DIGIBRIDGE</p>
                <img src={isDarkMode ? sihImgDark : sihImg} alt="Smart India Hackathon" className="w-20 md:w-24 lg:hidden" />
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight dark:text-white"
                custom={0.2}
                variants={fadeUp}
              >
                Smart Education<br />Accessible to Everyone
              </motion.h1>

              <motion.button
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium rounded-md w-fit"
                custom={0.3}
                variants={fadeUp}
              >
                Project Showcase
              </motion.button>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm mt-6 lg:hidden"
                custom={0.4}
                variants={fadeUp}
              >
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">ROLE</h3>
                  <p className="text-gray-600 dark:text-gray-300">Front-End Development<br />Design Thinking</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">SKILLS</h3>
                  <p className="text-gray-600 dark:text-gray-300">Product Design<br />Prototyping<br />Game Development</p>
                </div>
                <div className="col-span-2">
                  <h3 className="font-semibold mb-1 text-sm dark:text-gray-200">TEAMMATES</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Tharun Raj R G, Vishal N, Rahul V, Aparna S,<br />
                    Aishvarya R, Thiriphura Sundari C S,<br />
                    Krishnaja S, Raghul D
                  </p>
                </div>
              </motion.div>

              <motion.img
                src={heroImg}
                alt="Hero"
                className="md:w-7/8 mt-2 -ml-2 md:-ml-6 -mb-12 md:-mb-1"
                custom={0.5}
                variants={fadeUp}
              />
            </div>

            <motion.div
              className="flex flex-col gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img src={sihImg} alt="Smart India Hackathon" className="w-28 md:w-32 lg:w-40 self-end hidden lg:block" />

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm hidden lg:grid">
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">ROLE</h3>
                  <p className="text-gray-600 dark:text-gray-300">Front-End Development<br />Design Thinking</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 dark:text-gray-200">SKILLS</h3>
                  <p className="text-gray-600 dark:text-gray-300">Product Design<br />Prototyping<br />Game Development</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <h3 className="font-semibold mb-1 text-sm dark:text-gray-200">TEAMMATES</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tharun Raj R G, Vishal N, Rahul V, Aparna S,<br />
                  Aishvarya R, Thiriphura Sundari C S,<br />
                  Krishnaja S, Raghul D
                </p>
              </div>

              <div className="mt-4 hidden lg:block">
                <h3 className="text-base font-semibold mb-2 flex items-center gap-2 dark:text-gray-200">
                  <span>📝</span> Table of Contents
                </h3>
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 border border-gray-300 dark:border-gray-700 rounded-md p-4">
                  <li><strong>1</strong> &nbsp; The Problem with Education in India</li>
                  <li><strong>2</strong> &nbsp; The Solution: DigiBridge</li>
                  <li><strong>3</strong> &nbsp; AI-Based Early Warning System</li>
                  <li><strong>4</strong> &nbsp; Application Features</li>
                  <li><strong>5</strong> &nbsp; Community Learning Hubs</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section
          id="problem-section"
          className="bg-black text-white py-20 px-4 md:px-12 lg:px-32 space-y-16 w-screen items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center">The Problem with Education in India</h2>
          <div className="space-y-20 text-center">
            {[{ img: prb1, text: "Despite The Government building more schools than ever, The sheer amount of rural communities that lack access to them are evergrowing.", align: "center" },
              { img: prb2, text: "Financial Constraints require money for families, which results in opting of child labour over pursuing education at unreachable distances.", align: "row" },
              { img: prb3, text: "On top of that, The digitalization of education, affects the ones that are unconnected to the facilities severely, resulting in the manifestation of Digital Divide in Education.", align: "center" }]
              .map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col ${item.align === "row" ? "md:flex-row" : ""} justify-center items-center gap-10 text-center md:text-left`}
                  custom={i}
                  variants={fadeUp}
                >
                  <img src={item.img} alt={`Problem ${i + 1}`} className="w-72 animate-pulse" />
                  <p className="text-center max-w-md text-gray-200">{item.text}</p>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          className="bg-light dark:bg-[#121212] text-center py-20 px-4 md:px-12 lg:px-32 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-100">Our Solution: DigiBridge</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={sol1} alt="Solution Logo" className="mx-auto md:max-w-md -mt-12" />
          </motion.div>
          <motion.p
            className="text-base max-w-2xl mx-auto text-gray-800 dark:text-gray-300"
            custom={0.3}
            variants={fadeUp}
          >
            An Innovative <strong>e-learning platform</strong> designed to <strong>bridge the digital divide</strong>...
          </motion.p>
        </motion.section>
        {/* AI Section */}
        <motion.section
          className="bg-light dark:bg-[#101010] py-20 px-4 md:px-12 lg:px-32 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
            AI – Based Early Warning System
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
            <motion.div
              className="space-y-6 max-w-xl text-gray-800 dark:text-gray-300"
              variants={fadeUp}
            >
              {[
                {
                  step: "01",
                  title: "Identify",
                  desc:
                    "AI model analyzes data to identify students at risk by assessing factors like attendance and grades, assigning a risk level, and recording the primary risk factors and identification date.",
                },
                {
                  step: "02",
                  title: "Intervene",
                  desc:
                    "The AI model suggests intervention strategies for each at-risk student. Educators can input customized intervention plans based on specific needs, refining the AI model over time.",
                },
                {
                  step: "03",
                  title: "Impact",
                  desc:
                    "Regular progress updates document the student’s improvement, with outcomes like 'Improved' or 'Needs Further Intervention' guiding next steps.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  custom={i}
                  variants={fadeUp}
                >
                  <div className="text-white bg-teal-600 w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">
                    {item.step}
                  </div>
                  <p>
                    <strong>{item.title}</strong> <br /> {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-6 -mb-12 md:-mb-0 md:-mt-32 drop-shadow-xl"
              variants={fadeUp}
            >
              <motion.img
                src={ai1}
                alt="AI Dashboard 1"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 150 }}
              />
              <motion.img
                src={ai2}
                alt="AI Dashboard 2"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg"
                whileHover={{ scale: 1.04 }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="bg-light dark:bg-[#121212] py-20 px-4 md:px-12 lg:px-32 -mt-0 md:-mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 dark:text-gray-100">
            Application Features
          </h2>

          <motion.img
            src={desktopHead}
            alt="Desktop App"
            className="w-screen -mt-18 md:-mt-46"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                color: "bg-[#6cb5af]",
                title: "Multilingual",
                desc: "Aligned with NEP 2020, the desktop Application offers three language support - Hindi, English and regional Language.",
              },
              {
                color: "bg-[#453861]",
                title: "Multiple Learning ways",
                desc: "Interactive videos, quizzes, 3D models, and game-based learning to make studying fun.",
              },
              {
                color: "bg-[#6cb5af]",
                title: "Parental Engagement",
                desc: "Sends updates via Whatsapp or SMS to keep parents informed about child’s progress.",
              },
              {
                color: "bg-[#453861]",
                title: "Daily Student Engagement",
                desc: "Targets subjects students struggle in by offering daily questions and assessments.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className={`${f.color} p-4 rounded-md hover:scale-105 transform transition-transform duration-300 shadow-lg`}
                custom={i}
                variants={fadeUp}
              >
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Mobile App Section */}
        <motion.section
          className="bg-light dark:bg-[#111] py-20 px-4 md:px-12 lg:px-32 space-y-16 -mt-21"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            className="text-center space-y-4"
            variants={fadeUp}
            custom={0}
          >
            <motion.img
              src={mobileHead}
              alt="Mobile Hero"
              className="mx-auto w-40 sm:w-56 md:w-64"
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
            <h2 className="text-4xl font-bold tracking-wide dark:text-gray-100">
              MOBILE
            </h2>
            <p className="text-lg font-semibold -mt-5 dark:text-gray-300">
              LEARNING APP
            </p>
          </motion.div>

          <motion.div
            className="bg-[#453861] text-white py-12 px-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
            variants={fadeUp}
            custom={0.2}
          >
            <motion.img
              src={mobile1}
              alt="Mobile Screens"
              className="mx-auto w-full max-w-4xl rounded-lg"
              whileHover={{ scale: 1.03 }}
            />
            <motion.div
              className="text-white text-sm space-y-6 lg:w-1/2"
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold">Mobile App</h3>
              <p>
                The Digibridge mobile application is designed to make education accessible to all students...
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {[
                  {
                    color: "bg-[#70C3BC]",
                    title: "01 Parental Engagement Portal",
                    desc: "Low parental literacy and limited involvement are significant contributors...",
                  },
                  {
                    color: "bg-[#5E4B8B]",
                    title: "02 Financial Support Management System",
                    desc: "Provides details about available government schemes and scholarships.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`${item.color} p-4 rounded-lg flex-1 hover:scale-105 transition-transform duration-300`}
                    variants={fadeUp}
                    custom={i}
                  >
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Learning Section */}
          <motion.section
            className="bg-light dark:bg-[#121212] py-16 px-4 md:px-12 lg:px-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start md:-ml-24"
              variants={fadeUp}
            >
              <div className="space-y-6">
                {[game1, game2, game3].map((g, i) => (
                  <motion.img
                    key={i}
                    src={g}
                    alt={`Game ${i + 1}`}
                    className="rounded-lg w-full shadow-md hover:scale-105 transition-transform duration-300"
                    custom={i}
                    variants={fadeUp}
                  />
                ))}
              </div>

              <motion.div className="space-y-8" variants={fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold md:mt-26 dark:text-gray-100">
                  Interactive Learning
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-36">
                  {[
                    {
                      title: "Gamified Learning",
                      desc: "Story Mode Gaming Modules and Dynamic Gamified Quizzes...",
                    },
                    {
                      title: "Video Quizzes",
                      desc: "Video modules come alongside interactive quizzes...",
                    },
                    {
                      title: "Dissectable 3D Models",
                      desc: "Interactive dissection of 3D models...",
                    },
                    {
                      title: "Specific Games",
                      desc: "Creative topic-based games tailored for better understanding.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-[#f3f0fa] dark:bg-[#1e1b2b] border-l-4 border-[#5E4B8B] p-4 md:w-56 rounded-lg text-sm shadow-sm hover:translate-x-1 transition-transform"
                      custom={i}
                      variants={fadeUp}
                    >
                      <h4 className="font-semibold text-[#5E4B8B] mb-1 dark:text-[#a88df4]">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
          {/* Community Hubs Section */}
          <motion.section
            className="bg-light dark:bg-[#121212] py-16 px-4 md:px-12 lg:px-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
              variants={fadeUp}
            >
              <motion.div
                className="space-y-4"
                variants={fadeUp}
                custom={0.1}
              >
                <h2 className="text-2xl md:text-3xl font-bold dark:text-gray-100">
                  Community Learning Hubs
                </h2>
                <p className="text-base text-gray-800 dark:text-gray-300">
                  <strong>Utilising Refurbished Shipping Containers</strong> to
                  build accessible learning spaces.
                </p>
                <p className="text-base text-gray-800 dark:text-gray-300">
                  <strong>Equipped with PCs</strong> and all digital learning
                  essentials.
                </p>
                <p className="text-base text-gray-800 dark:text-gray-300">
                  Brings education to the underserved, especially those who{" "}
                  <strong>lack the facilities</strong>.
                </p>
              </motion.div>

              <motion.img
                src={hub}
                alt="Learning Hub"
                className="md:w-172 w-full max-w-md mx-auto rounded-xl hover:scale-[1.03] transition-transform duration-300"
                variants={fadeUp}
                custom={0.2}
                whileHover={{ y: -6 }}
              />
            </motion.div>
          </motion.section>

          {/* PDF and Video Section */}
          <motion.section
            className="py-20 px-4 md:px-12 lg:px-24 bg-light dark:bg-[#111] -mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.h1
              className="text-center justify-center mb-6 text-dark dark:text-gray-100 font-semibold text-lg"
              variants={fadeUp}
            >
              Project Material and Video
            </motion.h1>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto"
              variants={fadeUp}
            >
              <motion.div
                className="md:w-lg w-full h-[500px] md:h-[290px] md:-ml-24"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 150 }}
              >
                <iframe
                  src="/pdfs/db-ppt.pdf"
                  className="w-full h-full border rounded-xl shadow-md dark:border-gray-700"
                  title="Digibridge PDF"
                />
              </motion.div>

              <motion.div
                className="w-full md:w-lg aspect-video rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <video
                  controls
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src="/videos/db-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* SIH Team Section */}
          <motion.section
            className="bg-light dark:bg-[#121212] py-20 px-4 md:px-12 lg:px-32 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              className="mx-auto w-full max-w-3xl px-2"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={sihfinal}
                alt="SIH Final Team"
                className="w-full rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
              />
            </motion.div>

            <motion.h3
              className="text-base md:text-lg font-semibold mt-6 text-gray-800 dark:text-gray-200"
              variants={fadeUp}
            >
              The Team at the <br />
              <span className="text-xl md:text-2xl font-bold text-black dark:text-white">
                Smart India Hackathon 2024 Final
              </span>
            </motion.h3>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="bg-light dark:bg-[#0e0e0e] border-t py-12 px-4 md:px-12 lg:px-32 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.p
              className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 mb-2"
              variants={fadeUp}
            >
              Done Reading?
            </motion.p>
            <motion.h3
              className="text-lg md:text-xl font-extrabold mb-6 text-black dark:text-gray-100"
              variants={fadeUp}
            >
              Check out my other projects
            </motion.h3>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={fadeUp}
              custom={0.1}
            >
              {[
                {
                  href: "/aquavision",
                  text: "AquaVision",
                },
                {
                  href: "/verbofix",
                  text: "VerboFix",
                },
              ].map((btn, i) => (
                <motion.a
                  key={i}
                  href={btn.href}
                  className="bg-[#141414] dark:bg-gray-600 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 dark:hover:bg-niceorange transition"
                >
                  {btn.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.section>
        </motion.section>
      </div>
    </div>
  );
};

export default DigiBridgePage;
