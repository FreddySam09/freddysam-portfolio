import React from "react";
import mascotGif from "../assets/gifs/mascot-gif.gif";
import navFrame from "../assets/img/frame-nav.png";
import music from "../assets/icons/music.svg";
import logoDark from "../assets/img/logo-dark.png";
import InstaLogo from "../assets/icons/insta.svg?react";
import MailLogo from "../assets/icons/mail.svg?react";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full h-14 bg-gray-100 z-60 border-1 border-darkgray flex ">
        <img src={logoDark} alt="logo box" className="h-8 w-8 mt-3 ml-12" />
        <p className="text-xl font-sue mt-4 ml-2">Freddy Sam</p>
        <img src={mascotGif} alt="mascot" className="w-11 h-11 ml-4 mt-4" />
        <a href="/aboutme">
          <img
            src={navFrame}
            alt="about me"
            className="absolute right-56 w-9 h-9 ml-4 mr-4 mt-3 transition hover:scale-110"
          />
        </a>
        <img
          src={music}
          alt="music"
          className="thumb-c absolute right-42 w-9 h-9 ml-6 mr-4 mt-3 transition hover:scale-110"
        />
        <div className="bg-lightgray w-34 rounded-md h-10 mt-2 absolute right-8 flex gap-1">
          <a href="">
            <InstaLogo className="w-6 h-6 mt-[9px] ml-3 transition hover:scale-130 hover:mb-4 hover:rotate-3" />
          </a>
          <a href="">
            <LinkedInLogo className="w-6 h-6 mt-[9px] ml-3 transition hover:scale-130 hover:mb-4 hover:rotate-3" />
          </a>
          <a href="">
            <MailLogo className="w-8 h-9 mt-[2.5px] ml-3 transition hover:scale-130 hover:mb-4 hover:rotate-3" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;