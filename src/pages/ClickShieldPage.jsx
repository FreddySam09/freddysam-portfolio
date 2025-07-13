import React from 'react';
import heroImg from '../assets/img/clickshield/hero-img.png';


const ClickshieldPage = () => {
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
<section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-12 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    {/* Left - Title, Description, and Image */}
    <div className="lg:col-span-2 space-y-6">
      <p className="uppercase text-sm font-semibold tracking-widest text-blue-600">
        Clickshield
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Optical Underwater Communication
      </h1>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 text-sm font-medium rounded-md w-fit">
        Project Showcase
      </button>
      
      <img
        src={heroImg}
        alt="Clickshield Hero"
        className="w-full max-w-xl"
      />
    </div>

    {/* Right - Summary / Team / Skills */}
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-1">ROLE</h3>
          <p className="text-gray-600">Simulation<br />Research</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">SKILLS</h3>
          <p className="text-gray-600">OptiSystem<br />Data Analysis</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1 text-sm">TEAMMATES</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Freddy Sam, Raghul D, Udaya M R<br />Guided by Sarojani (NIOT)
        </p>
      </div>
    </div>
  </div>
</section>


      {/* PDF and Video Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto">
          {/* PDF Viewer */}
          <div className="w-full h-[500px] md:h-[290px]">
            <iframe
              src="/pdfs/Clickshield-ppt.pdf"
              className="w-full h-full border rounded-xl shadow-md"
              title="Clickshield PDF"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ClickshieldPage;
