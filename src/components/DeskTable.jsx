import React, { useState, useRef, useEffect } from "react";
import mascotGif from "../assets/gifs/mascot-gif.gif";
import mascotActiveGif from "../assets/gifs/mascot-active.gif";
import dice from "../assets/img/dice.png";
import diceHover from "../assets/img/dice-hover.png";
import picFrame from "../assets/img/pic-frame.png";
import coffee from "../assets/img/coffee.png";
import coffeeHover from "../assets/img/coffee-hover.png";
import radio from "../assets/img/radio.png";
import logo from "../assets/img/logo.png";
import logoDark from "../assets/img/logo-dark.png";
import block from "../assets/img/block.png";
import lamp from "../assets/img/lamp.png";
import lampOn from "../assets/img/lamp-on.png";
import music from "../assets/audio/lofi.mp3";
import InstaLogo from "../assets/icons/insta.svg?react";
import MailLogo from "../assets/icons/mail.svg?react";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import picFrameHover from "../assets/img/pic-frame-hover.png";
import frameNav from "../assets/img/frame-nav.png";
import MusicNote from "../assets/icons/music.svg?react";

export default function DeskTable({ onDiceClick, isNavbarVisible }) {
  const [isLampOn, setIsLampOn] = useState(false);
  const [isMascotHovered, setIsMascotHovered] = useState(false);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isDiceHovered, setIsDiceHovered] = useState(false);
  const [isRadioHovered, setIsRadioHovered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isFrameHovered, setIsFrameHovered] = useState(false);

  const toggleLamp = () => setIsLampOn(!isLampOn);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
    <div className={`transition-all duration-300 ease-in-out ${
      isNavbarVisible 
        ? "fixed top-0 left-0 w-full bg-gray-100 h-12 md:h-16 flex items-center justify-between px-4 md:px-10 z-[60]" 
        : "relative -mt-2 flex items-end justify-center"
    } font-sueellen`}>
      {/* Logo + Name + Mascot */}
      <div className="flex items-center gap-2 md:gap-3 ml-2 md:ml-0">
        <img
          src={isNavbarVisible ? logoDark : logo}
          alt="logo"
          className={`transition-all duration-700 ${
            isNavbarVisible ? "h-7 w-7 md:h-10 md:w-10" : "h-[calc(10vw+20px)] w-[calc(10vw+20px)] md:h-16 md:w-16 mb-0"
          } object-contain`}
        />
        {isNavbarVisible && (
          <p className="text-lg md:text-xl font-sue mt-1">Freddy Sam</p>
        )}
        <div
          className={`${
            isNavbarVisible ? "" : "absolute bottom-[0rem] left-[19%]"
          } z-50 pointer-events-auto group`}
          onMouseEnter={() => setIsMascotHovered(true)}
          onMouseLeave={() => setIsMascotHovered(false)}
        >
          <div
            className={`${
              isMascotHovered ? "block scale-110" : "hidden"
            } absolute inset-0 rounded-full ring-2 ring-[#ff7f50] ring-offset-2 transition-all duration-200 ease-in-out z-[60]`}
          />
          {isMascotHovered && (
            <div className="absolute -top-8 md:-top-10 left-2/3 -translate-x-1/2 text-dark text-xs md:text-sm font-sue text-center whitespace-nowrap z-[60] rotate-6">
              Hey there! I’m your little buddy 🐾
            </div>
          )}
          <img
            src={isMascotHovered ? mascotActiveGif : mascotGif}
            alt="mascot gif"
            className={`object-contain transition-all duration-700 ease-in-out ${
              isNavbarVisible 
                ? "h-8 w-8 md:h-13 md:w-13 mt-4 md:mt-5"  
                : `h-[calc(10vw+20px)] w-[calc(10vw+20px)] md:h-24 md:w-24 ${isMascotHovered ? "scale-110" : "scale-100"}`
            }`}
          />
        </div>
      </div>

      {/* Desk items */}
      <div className={`flex items-center gap-1 md:gap-4 transition-all duration-700 ${
        isNavbarVisible ? "" : "items-end gap-1 md:gap-5 -mt-16 md:-mt-26"
      } z-0`}>
        <div className={`${isNavbarVisible ? "hidden" : "w-[calc(10vw+20px)] md:w-24"}`} />

        {/* Dice */}
        {!isNavbarVisible && (
          <div
            className="link-c relative h-[calc(5vw+10px)] w-[calc(5vw+10px)] md:h-9 md:w-9 mb-2 cursor-pointer z-15"
            onMouseEnter={() => setIsDiceHovered(true)}
            onMouseLeave={() => setIsDiceHovered(false)}
            onClick={onDiceClick}
            role="button"
            aria-label="Roll the dice"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onDiceClick()}
          >
            {isDiceHovered && (
              <div className="absolute -top-10 md:-top-14 left-1/4 -translate-x-1/2 text-dark text-xs md:text-sm font-sue text-center whitespace-nowrap z-[20] -rotate-3">
                Wanna roll me? 🎲
              </div>
            )}
            <img
              src={isDiceHovered ? diceHover : dice}
              alt="dice"
              className={`h-full w-full object-contain transition-all duration-200 ease-in-out ${
                isDiceHovered ? "scale-150 md:scale-170 -rotate-12 -mt-4 md:-mt-5" : "scale-100"
              }`}
            />
          </div>
        )}

        {/* Frame */}
        <div
          className={`relative link-c ${
            isNavbarVisible ? "h-6 w-6 md:h-10 md:w-10" : "h-[calc(12vw+24px)] w-[calc(10vw+20px)] md:h-30 md:w-26 -ml-1"
          }`}
          onMouseEnter={() => setIsFrameHovered(true)}
          onMouseLeave={() => setIsFrameHovered(false)}
        >
          {isFrameHovered && (
            <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 text-dark text-xs md:text-sm font-sue text-center whitespace-nowrap z-30 -rotate-2">
              Know about me 🧑‍💻
            </div>
          )}
          {!isNavbarVisible && isFrameHovered && (
            <div className="absolute inset-0 rounded-full bg-orange-300 blur-md opacity-40 z-[-1]" />
          )}
          <a href="/aboutme">
            <img
              src={isNavbarVisible ? frameNav : (isFrameHovered ? picFrameHover : picFrame)}
              alt="frame"
              className={`h-full w-full object-contain transition-all duration-300 ease-in-out ${
                isFrameHovered ? "scale-110 rotate-6 mb-2 md:mb-4" : "scale-100"
              }`}
            />
          </a>
        </div>

        {/* Coffee (hidden on mobile) */}
        {!isNavbarVisible && (
          <div
            className="relative h-12 w-12 md:h-17 md:w-17 -mb-1 hidden md:block"
            onMouseEnter={() => setIsCoffeeHovered(true)}
            onMouseLeave={() => setIsCoffeeHovered(false)}
          >
            {isCoffeeHovered && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 text-dark text-sm font-sue text-center whitespace-nowrap z-[20] -rotate-3">
                Never without a ☕
              </div>
            )}
            <img
              src={isCoffeeHovered ? coffeeHover : coffee}
              alt="coffee"
              className={`h-full w-full object-contain transition-all duration-200 ease-in-out ${
                isCoffeeHovered ? "scale-110 -rotate-12 -mt-4" : "scale-100"
              }`}
            />
          </div>
        )}

        {/* Radio (hidden on mobile) */}
        <div
          className={`relative cursor-pointer transition-all duration-300 ${
            isNavbarVisible ? "h-6 w-6 md:h-10 md:w-10 hidden md:block" : "h-14 w-16 md:h-19 md:w-21 mb-1 hidden md:block"
          } ${isRadioHovered || isMusicPlaying ? "scale-110" : ""} ${
            isMusicPlaying ? "animate-bounce" : ""
          }`}
          onMouseEnter={() => setIsRadioHovered(true)}
          onMouseLeave={() => setIsRadioHovered(false)}
          onClick={toggleMusic}
          role="button"
          aria-label={isMusicPlaying ? "Stop music" : "Play music"}
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleMusic()}
        >
          {isRadioHovered && (
            <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 text-dark text-xs md:text-sm font-sue text-center whitespace-nowrap z-[20] -rotate-2">
              {isMusicPlaying ? "Click to stop" : "Music is everything to me 🎶"}
            </div>
          )}
          {isNavbarVisible ? (
            <MusicNote
              className={`thumb-c h-full w-full object-contain transition-all duration-200 ${
                isMusicPlaying ? "text-niceorange" : "text-black"
              }`}
            />
          ) : (
            <img
              src={radio}
              alt="radio"
              className="thumb-c h-full w-full object-contain"
            />
          )}
          {!isNavbarVisible && isMusicPlaying && (
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1 z-20 pointer-events-none">
              <div className="w-2 h-2 bg-black rounded-full animate-bounce-dot1" />
              <div className="w-2 h-2 bg-black rounded-full animate-bounce-dot2" />
              <div className="w-2 h-2 bg-black rounded-full animate-bounce-dot3" />
            </div>
          )}
          {!isNavbarVisible && isMusicPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-[-1]">
              <div className="absolute w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-niceorange animate-ring-ping"></div>
              <div className="absolute w-12 md:w-14 h-12 md:h-14 rounded-full border-2 border-niceorange animate-ring-ping delay-300"></div>
            </div>
          )}
        </div>

        {/* Social icons (hidden on mobile in table state) */}
        {isNavbarVisible ? (
          <div className="bg-lightgray rounded-md px-1 md:px-4 py-0 md:py-2 flex items-center gap-2 md:gap-3">
            <a href="https://www.instagram.com/sam.fredx/">
              <InstaLogo className="h-4 w-4 md:h-5 md:w-5 hover:scale-120 transition hover:text-niceorange hover:rotate-2" />
            </a>
            <a href="https://www.linkedin.com/in/your-profile">
              <LinkedInLogo className="h-4 w-4 md:h-5 md:w-5 hover:scale-120 transition hover:text-niceorange hover:rotate-2" />
            </a>
            <a href="mailto:your-freddysamv@gmail.com">
              <MailLogo className="h-5 w-5 md:h-6 md:w-6 hover:scale-120 transition hover:text-niceorange hover:rotate-2" />
            </a>
          </div>
        ) : (
          <>
            <div className="hidden md:block relative h-14 w-14 ml-1 md:ml-2 mb-1 z-0 group transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-2">
              <img src={block} alt="Instagram block" className="h-full w-full object-contain" />
              <a href="https://www.instagram.com/sam.fredx/">
                <InstaLogo className="absolute inset-0 m-auto h-7 w-7 transition-colors duration-300 group-hover:text-niceorange" />
              </a>
            </div>
            <div className="hidden md:block relative h-14 w-14 -ml-5 -mr-4 mb-1 z-0 group transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-2">
              <img src={block} alt="LinkedIn block" className="h-full w-full object-contain" />
              <a href="https://www.linkedin.com/in/your-profile">
                <LinkedInLogo className="absolute inset-0 m-auto h-7 w-7 transition-colors duration-300 group-hover:text-niceorange" />
              </a>
            </div>
            <div className="hidden md:block relative h-14 w-14 -ml-22 mb-14 z-0 group transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-3">
              <img src={block} alt="Mail block" className="h-full w-full object-contain" />
              <a href="mailto:your-freddysamv@gmail.com">
                <MailLogo className="absolute inset-0 m-auto h-7 w-7 transition-colors duration-300 group-hover:text-niceorange" />
              </a>
            </div>
          </>
        )}

        {/* Lamp */}
        {!isNavbarVisible && (
          <div
            className="relative h-[calc(20vw+40px)] w-[calc(16vw+32px)] md:h-46 md:w-38 -mb-2 object-contain"
            onClick={toggleLamp}
            role="button"
            aria-label={isLampOn ? "Turn off lamp" : "Turn on lamp"}
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleLamp()}
          >
            {isLampOn && (
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-[calc(8vw+16px)] md:w-20 h-[calc(8vw+16px)] md:h-20 bg-orange-300 blur-xl opacity-50 rounded-full z-[-1]" />
            )}
            <img
              src={isLampOn ? lampOn : lamp}
              alt="lamp"
              className="thumb-c h-full w-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Table bar */}
      <div className={`absolute ${
        isNavbarVisible 
          ? "border-1 border-darkgray bottom-0 left-0 w-full h-[1px] bg-darkgray" 
          : "border-dark border-[1.5px] bottom-0 h-3 w-[90%] md:w-[85%] bg-lightgray"
      } rounded-sm z-10 transition-all duration-300`} />

      {/* Audio element */}
      <audio ref={audioRef} src={music} loop preload="auto" />
    </div>
    <div className="justify-center text-center font-figtree font-semibold text-xs text-gray-600 mt-16 -mb-16 block md:hidden animate-pulse">Open in Desktop for a better experience</div>
    </>
  );
}