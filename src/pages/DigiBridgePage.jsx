import React from 'react';
import heroImg from '../assets/img/digibridge/hero-img.png';
import sihImg from '../assets/img/digibridge/sih.png';
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


const DigiBridgePage = () => {
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
            {/* Header with SIH logo on mobile */}
            <div className="flex justify-between items-center">
              <p className="uppercase text-sm font-semibold tracking-widest">DIGIBRIDGE</p>
              <img
                src={sihImg}
                alt="Smart India Hackathon"
                className="w-20 md:w-24 lg:hidden"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Education<br />Accessible to Everyone
            </h1>

            <button className="bg-gray-200 text-gray-800 px-4 py-2 text-sm font-medium rounded-md w-fit">
              Project Showcase
            </button>

            {/* Role / Skills / Team - Mobile only */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm mt-6 lg:hidden">
              <div>
                <h3 className="font-semibold mb-1">ROLE</h3>
                <p className="text-gray-600">Front-End Development<br />Design Thinking</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">SKILLS</h3>
                <p className="text-gray-600">Product Design<br />Prototyping<br />Game Development</p>
              </div>
              <div className="col-span-2">
                <h3 className="font-semibold mb-1 text-sm">TEAMMATES</h3>
                <p className="text-gray-600 text-sm">
                  Tharun Raj R G, Vishal N, Rahul V, Aparna S,<br />
                  Aishvarya R, Thiriphura Sundari C S,<br />
                  Krishnaja S, Raghul D
                </p>
              </div>
            </div>

            <img src={heroImg} alt="Hero" className="md:w-7/8 mt-2 -ml-2 md:-ml-6 -mb-12 md:-mb-1" />
          </div>

          {/* Right Section - Role, Skills, Team, TOC, SIH Badge (Desktop only) */}
          <div className="flex flex-col gap-8">
            {/* SIH Badge (Desktop only) */}
            <img
              src={sihImg}
              alt="Smart India Hackathon"
              className="w-28 md:w-32 lg:w-40 self-end hidden lg:block"
            />

            {/* Role/Skills/Team - Desktop only */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm hidden lg:grid">
              <div>
                <h3 className="font-semibold mb-1">ROLE</h3>
                <p className="text-gray-600">Front-End Development<br />Design Thinking</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">SKILLS</h3>
                <p className="text-gray-600">Product Design<br />Prototyping<br />Game Development</p>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-semibold mb-1 text-sm">TEAMMATES</h3>
              <p className="text-gray-600 text-sm">
                Tharun Raj R G, Vishal N, Rahul V, Aparna S,<br />
                Aishvarya R, Thiriphura Sundari C S,<br />
                Krishnaja S, Raghul D
              </p>
            </div>

            {/* TOC - Desktop only */}
            <div className="mt-4 hidden lg:block">
              <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                <span>📝</span> Table of Contents
              </h3>
              <ol className="text-sm text-gray-700 space-y-1 border border-gray-300 rounded-md p-4">
                <li><strong>1</strong> &nbsp; The Problem with Education in India</li>
                <li><strong>2</strong> &nbsp; The Solution: DigiBridge</li>
                <li><strong>3</strong> &nbsp; AI-Based Early Warning System</li>
                <li><strong>4</strong> &nbsp; Application Features</li>
                <li><strong>5</strong> &nbsp; Community Learning Hubs</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section section id="problem-section" className="bg-black text-white py-20 px-4 md:px-12 lg:px-32 space-y-16 w-screen items-center">
        <h2 className="text-2xl md:text-3xl font-semibold">1 The Problem with Education in India</h2>

        <div className="space-y-20">
          {/* Problem 1 */}
          <div className="text-center space-y-6">
            <img src={prb1} alt="Problem 1" className="mx-auto max-w-xs" />
            <p className="text-base max-w-xl mx-auto">
              Despite The Government building more schools than ever, The sheer amount of rural
              communities that lack access to them are evergrowing.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center md:text-left">
            <img src={prb2} alt="Problem 2" className="w-72" />
            <p className="text-base max-w-md">
              Financial Constraints require money for families, which results in opting of child labour
              over pursuing education at unreachable distances.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="text-center space-y-6">
            <img src={prb3} alt="Problem 3" className="mx-auto max-w-xs" />
            <p className="text-base max-w-xl mx-auto">
              On top of that, The digitalization of education, affects the ones that are unconnected to the facilities
              severely, resulting in the manifestation of Digital Divide in Education.
            </p>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="bg-white text-center py-20 px-4 md:px-12 lg:px-32 space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold">2 Our Solution: DigiBridge</h2>
        <img src={sol1} alt="Solution Logo" className="mx-auto md:max-w-md -mt-12" />
        <p className="text-base max-w-2xl mx-auto">
          An Innovative <strong>e-learning platform</strong> designed to <strong>bridge the digital divide</strong> in education,
          providing equitable access to quality learning resources. It integrates personalized support, community engagement,
          and interactive tools to improve student retention, across platforms, <strong>aligning with the goals of NEP 2020</strong>.
        </p>
      </section>

      {/* AI Section */}
      <section className="bg-white py-20 px-4 md:px-12 lg:px-32 space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold">3 AI – Based Early Warning System</h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-start">
          {/* Left Column - Points */}
          <div className="space-y-6 max-w-xl">
            <div className="flex items-start gap-4">
              <div className="text-white bg-teal-600 w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">01</div>
              <p>
                <strong>Identify</strong> <br />
                AI model <strong>analyzes data</strong> to identify students at risk by assessing factors like attendance and grades,
                assigning a risk level, and recording the primary risk factors and identification date.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-white bg-teal-600 w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">02</div>
              <p>
                <strong>Intervene</strong> <br />
                The AI model suggests <strong>intervention strategies</strong> for each at-risk student. Educators can input customized
                intervention plans based on specific needs, which refine the AI model over time.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-white bg-teal-600 w-8 h-8 flex items-center justify-center rounded-full font-bold px-3">03</div>
              <p>
                <strong>Impact</strong> <br />
                <strong>Regular progress updates</strong> document the student’s improvement, with outcomes like “Improved” or “Needs Further Intervention” guiding next steps.
              </p>
            </div>
          </div>

          {/* Right Column - Dashboards */}
          <div className="space-y-6 -mb-12 md:-mb-0 md:-mt-32 drop-shadow-xl">
            <img src={ai1} alt="AI Dashboard 1" className="w-full max-w-md mx-auto lg:mx-0" />
            <img src={ai2} alt="AI Dashboard 2" className="w-full max-w-md mx-auto lg:mx-0" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4 md:px-12 lg:px-32 -mt-0 md:-mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">4 Application Features</h2>
        <img src={desktopHead} alt="Desktop App" className="w-screen -mt-18 md:-mt-46" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white">
          <div className="bg-[#6cb5af] p-4 rounded-md">
            <h3 className="font-bold mb-2">Multilingual</h3>
            <p>Aligned with NEP 2020, the desktop Application offers <strong>three language support</strong> - Hindi, English and regional Language.</p>
          </div>
          <div className="bg-[#453861] p-4 rounded-md">
            <h3 className="font-bold mb-2">Multiple Learning ways</h3>
            <p>Interactive videos, quizzes, <strong>3D models</strong>, and game-based learning to make studying fun.</p>
          </div>
          <div className="bg-[#6cb5af] p-4 rounded-md">
            <h3 className="font-bold mb-2">Parental Engagement</h3>
            <p>Sends updates via <strong>Whatsapp or SMS</strong> to keep parents informed about child’s progress.</p>
          </div>
          <div className="bg-[#453861] p-4 rounded-md">
            <h3 className="font-bold mb-2">Daily Student Engagement</h3>
            <p>Targets <strong>subjects students struggle</strong> in by offering daily questions and assessments.</p>
          </div>
        </div>
      </section>
      {/* Mobile App Section */}
      <section className="bg-white py-20 px-4 md:px-12 lg:px-32 space-y-16 -mt-21">
        <div className="text-center space-y-4">
          <img src={mobileHead} alt="Mobile Hero" className="mx-auto w-40 sm:w-56 md:w-64" />
          <h2 className="text-4xl font-bold tracking-wide">MOBILE</h2>
          <p className="text-lg font-semibold -mt-5">LEARNING APP</p>
        </div>

        <div className="bg-[#453861] text-white py-12 px-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <img src={mobile1} alt="Mobile Screens" className="mx-auto w-full max-w-4xl" />

          <div className="text-white text-sm space-y-6 lg:w-1/2">
            <h3 className="text-xl font-semibold">Mobile App</h3>
            <p>
              The Digibridge mobile application is designed to make education accessible to all students,
              even in areas with limited resources and internet connectivity. It bridges the involvement
              gap between schools, students, and parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-[#70C3BC] p-4 rounded-lg flex-1">
                <h4 className="font-bold mb-2">01 Parental Engagement Portal</h4>
                <p className="text-xs">
                  Low parental literacy and limited involvement are significant contributors to student dropout rates.
                  Sends updates via WhatsApp or SMS about the child's attendance and academic performance.
                  Ensures parents stay informed even if they are not digitally proficient.
                </p>
              </div>
              <div className="bg-[#5E4B8B] p-4 rounded-lg flex-1">
                <h4 className="font-bold mb-2">02 Financial Support Management System</h4>
                <p className="text-xs">
                  Provides comprehensive details about available government schemes and scholarships. Filters out
                  eligible aid programs and educates parents about financial schemes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Bullets */}
        <div className="mt-20 flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="flex-1">
            <img src={mobile2} alt="Mobile Features" className="w-full max-w-5xl mx-auto lg:mx-0" />
          </div>

          {/* Right: Text Points */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:mt-27">
            {[
              {
                title: 'Multilingual Support',
                desc:
                  'Follows the three-language formula aligned with NEP 2020, ensuring inclusivity for all students.'
              },
              {
                title: 'Encouraging Leaderboard',
                desc:
                  'Highlights only the top three scorers to promote healthy competition without discouraging others.'
              },
              {
                title: 'Flexible Schooling',
                desc:
                  'DigiBridge ensures students can continue their learning from home, contributing to flexible education.'
              },
              {
                title: 'Goal Setting and Progress Tracking',
                desc:
                  'Students can set personalized goals and monitor their progress, helping them stay motivated and focused on their academic journey.'
              }
            ].map((item, index) => (
              <div key={index}>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-white bg-[#5E4B8B] w-6 h-6 flex items-center justify-center rounded-full text-xs">
                    0{index + 1}
                  </span>
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
    </>
  );
};

export default DigiBridgePage;
