import React from "react";
import mailIcon from "../assets/img/mail-icon.png";


export default function SubstackSignup() {
  return (
    <div className="w-full flex justify-center mt-18 md:mt-32 px-4 mb-12">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f0f] shadow-sm p-6 md:p-8 hover:scale-105 hover:shadow-xl transition">
        <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl md:text-3xl font-sue mb-4 text-center mt-2">
          Stay in the <span className="text-niceorange">loop</span>
        </h2>
        <img src={mailIcon} alt="" className="w-12"/>
        </div>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center mb-4 font-figtree">
          this is my little personal void where i chat and rant off my little thoughts
          <br />subscribe if u r interested!
        </p>

        <iframe
          src="https://freddysam.substack.com/embed"
          width="100%"
          height="150"
          frameBorder="0"
          scrolling="no"
          className="rounded-xl bg-transparent"
          title="Substack Signup"
        ></iframe>
      </div>
    </div>
  );
}
