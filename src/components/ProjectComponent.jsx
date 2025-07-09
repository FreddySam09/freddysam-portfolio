import React from 'react';
import doodleStuff from "../assets/img/doodle-stuff.png";

const ProjectComponent = ({ title, from, to, gif, summary, link, tags = [] }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
      <div className="flex-col mr-0 md:mr-12 mb-4 md:mb-0">
        <div className="flex mb-4 md:mb-6">
          <p className="w-2 h-2 bg-niceorange rounded-full mr-2 mt-2"></p>
          <p className="text-sm md:text-md font-sue">{from} - {to}</p>
        </div>
        <h1 className="text-3xl md:text-4xl text-dark font-figtree mb-4">{title}</h1>
        <p className="text-base md:text-lg text-gray-500 w-full md:w-68 leading-tight">{summary}</p>
        <div className="flex flex-wrap gap-2 mt-2 w-full md:w-68">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-2 py-1 bg-gray-300 rounded-sm text-sm md:text-md text-gray-600 inline-block hover:bg-gray-600 hover:text-gray-300 transition"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <a href={link} className="block overflow-hidden w-full md:w-166">
        <img
          src={gif}
          alt=""
          className="w-full md:w-166 view-c object-cover transform scale-105 hover:scale-100 transition-transform duration-300 ease-in-out"
        />
      </a>
      <a href={link} className='w-full block md:hidden'><button className='bg-dark w-full rounded-sm text-light font-figtree text-sm py-1 mt-2 block md:hidden'>View Project</button></a>
    </div>
  );
};

export default ProjectComponent;