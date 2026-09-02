import React, { useState, useRef, useEffect } from "react";

import mascotGif from "../assets/gifs/mascot-gif.gif";
import mascotActiveGif from "../assets/gifs/mascot-active.gif";
import mascotGifDark from "../assets/gifs/mascot-gif-dark.gif";
import mascotActiveGifDark from "../assets/gifs/mascot-active-dark.gif";

import dice from "../assets/img/dice.png";
import diceHover from "../assets/img/dice-hover.png";
import diceDark from "../assets/img/dice-dark.png";
import diceHoverDark from "../assets/img/dice-hover-dark.png";

import picFrame from "../assets/img/pic-frame.png";
import picFrameDark from "../assets/img/pic-frame-dark.png";
import picFrameHover from "../assets/img/pic-frame-hover.png";
import picFrameHoverDark from "../assets/img/pic-frame-hover-dark.png";

import frameNav from "../assets/img/frame-nav.png";
import frameNavDark from "../assets/img/frame-nav-dark.png";

import coffee from "../assets/img/coffee.png";
import coffeeHover from "../assets/img/coffee-hover.png";
import coffeeDark from "../assets/img/coffee-dark.png";
import coffeeHoverDark from "../assets/img/coffee-full-dark.png";

import radio from "../assets/img/radio.png";
import radioDark from "../assets/img/radio-dark.png";

import logo from "../assets/img/logo.png";
import logoDark from "../assets/img/logo-dark.png";
import logoOrange from "../assets/icon.svg";

import block from "../assets/img/block.png";
import blockDark from "../assets/img/block-dark.png";

import lamp from "../assets/img/lamp.png";
import lampOn from "../assets/img/lamp-dark.png";

import music from "../assets/audio/lofi.mp3";

import MailLogo from "../assets/icons/mail.svg?react";
import LinkedInLogo from "../assets/icons/LinkedInLogo.svg?react";
import GithubLogo from "../assets/icons/github.svg?react";
import MusicNote from "../assets/icons/music.svg?react";

import { useTheme } from "../context/ThemeContext";

export default function DeskTable({
  onDiceClick,
  isNavbarVisible,
}) {
  const [isLampOn, setIsLampOn] = useState(false);
  const [isMascotHovered, setIsMascotHovered] = useState(false);
  const [isCoffeeHovered, setIsCoffeeHovered] = useState(false);
  const [isDiceHovered, setIsDiceHovered] = useState(false);
  const [isRadioHovered, setIsRadioHovered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isFrameHovered, setIsFrameHovered] = useState(false);

  const audioRef = useRef(null);

  const { isDarkMode, toggleTheme } = useTheme();

  const toggleLamp = () => {
    toggleTheme();
    setIsLampOn((prev) => !prev);
  };

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
      <div
        className={`
          transition-all
          duration-300
          ease-in-out
          ${
            isNavbarVisible
              ? `
                fixed
                top-0
                left-0
                w-full
                bg-light
                dark:bg-light
                h-12
                md:h-16
                flex
                items-center
                justify-between
                px-4
                md:px-10
                z-[60]
                border-b
                border-lightgray
              `
              : `
                relative
                -mt-2
                flex
                items-end
                justify-center
              `
          }
          font-sue
        `}
      >
        {/* LOGO + NAME + MASCOT */}

        <div className="flex items-center gap-2 md:gap-3 ml-2 md:ml-0">
          <img
            src={
              isDarkMode
                ? logoOrange
                : isNavbarVisible
                ? logoDark
                : logo
            }
            alt="logo"
            className={`
              transition-all
              duration-700
              ${
                isNavbarVisible
                  ? "h-7 w-7 md:h-10 md:w-10"
                  : `
                    h-[calc(10vw+20px)]
                    w-[calc(10vw+20px)]
                    md:h-16
                    md:w-16
                  `
              }
              object-contain
            `}
          />

          {isNavbarVisible && (
            <p className="text-lg md:text-xl font-sue mt-1 text-dark">
              Freddy Sam
            </p>
          )}

          <div
            className={`
              ${
                isNavbarVisible
                  ? "relative"
                  : "absolute bottom-[0rem] left-[19%]"
              }
              z-50
              pointer-events-auto
              group
            `}
            onMouseEnter={() => setIsMascotHovered(true)}
            onMouseLeave={() => setIsMascotHovered(false)}
          >
            {/* Tooltip ONLY in normal table state */}

            {!isNavbarVisible && isMascotHovered && (
              <div
                className="
                  absolute
                  -top-8
                  md:-top-10
                  left-1/2
                  -translate-x-1/2
                  text-dark
                  text-xs
                  md:text-sm
                  font-figtree
                  text-center
                  whitespace-nowrap
                  z-[60]
                  bg-lightgray
                  py-1
                  px-2
                  rounded-sm
                  border
                  border-darkgray
                "
              >
                Little Buddy
              </div>
            )}

            <img
              src={
                isDarkMode
                  ? isMascotHovered
                    ? mascotActiveGifDark
                    : mascotGifDark
                  : isMascotHovered
                  ? mascotActiveGif
                  : mascotGif
              }
              alt="mascot gif"
              className={`
                object-contain
                transition-all
                duration-700
                ease-in-out
                ${
                  isNavbarVisible
                    ? `
                      h-8
                      w-8
                      md:h-13
                      md:w-13
                      mt-6
                      md:mt-5
                    `
                    : `
                      h-[calc(10vw+20px)]
                      w-[calc(10vw+20px)]
                      md:h-24
                      md:w-24
                      ${
                        isMascotHovered
                          ? "scale-110"
                          : "scale-100"
                      }
                    `
                }
              `}
            />
          </div>
        </div>

        {/* DESK / NAVBAR ITEMS */}

        <div
          className={`
            flex
            items-center
            gap-1
            md:gap-4
            transition-all
            duration-700
            ${
              isNavbarVisible
                ? ""
                : `
                  items-end
                  gap-1
                  md:gap-5
                  -mt-16
                  md:-mt-26
                `
            }
            z-0
          `}
        >
          <div
            className={
              isNavbarVisible
                ? "hidden"
                : "w-[calc(10vw+20px)] md:w-24"
            }
          />

          {/* DICE */}

          {!isNavbarVisible && (
            <div
              className="
                link-c
                relative
                h-[calc(5vw+10px)]
                w-[calc(5vw+10px)]
                md:h-9
                md:w-9
                mb-2
                cursor-pointer
                z-15
              "
              onMouseEnter={() => setIsDiceHovered(true)}
              onMouseLeave={() => setIsDiceHovered(false)}
              onClick={onDiceClick}
              role="button"
              aria-label="Roll the Dice"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && onDiceClick()
              }
            >
              {isDiceHovered && (
                <div
                  className="
                    absolute
                    -top-25
                    -ml-6
                    md:-top-20
                    left-1/4
                    -translate-x-1/2
                    text-xs
                    md:text-sm
                    text-center
                    whitespace-nowrap
                    z-[20]
                    bg-lightgray
                    py-1
                    px-2
                    rounded-sm
                    border
                    border-darkgray
                    text-dark
                  "
                >
                  Roll the Dice
                </div>
              )}

              <img
                src={
                  isDarkMode
                    ? isDiceHovered
                      ? diceHoverDark
                      : diceDark
                    : isDiceHovered
                    ? diceHover
                    : dice
                }
                alt="dice"
                className={`
                  h-full
                  w-full
                  object-contain
                  transition-all
                  duration-200
                  ease-in-out
                  ${
                    isDiceHovered
                      ? `
                        scale-150
                        md:scale-170
                        -rotate-12
                        -mt-4
                        md:-mt-5
                      `
                      : "scale-100"
                  }
                `}
              />
            </div>
          )}

          {/* FRAME / ABOUT */}

          <div
            className={`
              relative
              link-c
              ${
                isNavbarVisible
                  ? "h-6 w-6 md:h-10 md:w-10"
                  : `
                    h-[calc(12vw+24px)]
                    w-[calc(10vw+20px)]
                    md:h-30
                    md:w-26
                    -ml-1
                  `
              }
            `}
            onMouseEnter={() => {
              setIsFrameHovered(true);
            }}
            onMouseLeave={() => {
              setIsFrameHovered(false);
            }}
          >
            {/* Tooltip ONLY in normal table state */}

            {!isNavbarVisible && isFrameHovered && (
              <div
                className="
                  absolute
                  -top-8
                  md:-top-10
                  -mt-2
                  left-1/2
                  -translate-x-1/2
                  text-dark
                  text-xs
                  md:text-sm
                  font-figtree
                  text-center
                  whitespace-nowrap
                  z-30
                  bg-lightgray
                  py-1
                  px-2
                  rounded-sm
                  border
                  border-darkgray
                "
              >
                About Me
              </div>
            )}

            <a href="/aboutme">
              <img
                src={
                  isNavbarVisible
                    ? isDarkMode
                      ? frameNavDark
                      : frameNav
                    : isDarkMode
                    ? isFrameHovered
                      ? picFrameHoverDark
                      : picFrameDark
                    : isFrameHovered
                    ? picFrameHover
                    : picFrame
                }
                alt="About Me"
                className={`
                  h-full
                  w-full
                  object-contain
                  transition-all
                  duration-300
                  ease-in-out
                  ${
                    !isNavbarVisible && isFrameHovered
                      ? `
                        scale-110
                        rotate-6
                        mb-2
                        md:mb-4
                      `
                      : "scale-100"
                  }
                `}
              />
            </a>
          </div>

          {/* COFFEE */}

          {!isNavbarVisible && (
            <div
              className="
                relative
                h-12
                w-12
                md:h-17
                md:w-17
                -mb-1
                hidden
                md:block
              "
              onMouseEnter={() => setIsCoffeeHovered(true)}
              onMouseLeave={() => setIsCoffeeHovered(false)}
            >
              {isCoffeeHovered && (
                <div
                  className="
                    absolute
                    -top-9
                    left-1/2
                    -translate-x-1/2
                    -mt-6
                    text-dark
                    text-sm
                    font-figtree
                    text-center
                    whitespace-nowrap
                    z-[20]
                    bg-lightgray
                    py-1
                    px-2
                    rounded-sm
                    border
                    border-darkgray
                  "
                >
                  Take a Sip
                </div>
              )}

              <img
                src={
                  isDarkMode
                    ? isCoffeeHovered
                      ? coffeeHoverDark
                      : coffeeDark
                    : isCoffeeHovered
                    ? coffeeHover
                    : coffee
                }
                alt="coffee"
                className={`
                  h-full
                  w-full
                  object-contain
                  transition-all
                  duration-200
                  ease-in-out
                  ${
                    isCoffeeHovered
                      ? "scale-110 -rotate-12 -mt-4"
                      : "scale-100"
                  }
                `}
              />
            </div>
          )}

          {/* MUSIC / RADIO */}

          <div
            className={`
              relative
              cursor-pointer
              transition-all
              duration-300
              ${
                isNavbarVisible
                  ? `
                    h-6
                    w-6
                    md:h-9
                    md:w-9
                    hidden
                    md:block
                  `
                  : `
                    h-14
                    w-16
                    md:h-19
                    md:w-21
                    mb-1
                    hidden
                    md:block
                  `
              }
              ${
                isRadioHovered || isMusicPlaying
                  ? "scale-110"
                  : ""
              }
              ${
                isMusicPlaying
                  ? "animate-bounce"
                  : ""
              }
            `}
            onMouseEnter={() => {
              setIsRadioHovered(true);
            }}
            onMouseLeave={() => {
              setIsRadioHovered(false);
            }}
            onClick={toggleMusic}
            role="button"
            aria-label={
              isMusicPlaying
                ? "Stop Music"
                : "Play Music"
            }
            tabIndex={0}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" ||
                e.key === " "
              ) {
                e.preventDefault();
                toggleMusic();
              }
            }}
          >
            {/* Tooltip ONLY in normal table state */}

            {!isNavbarVisible && isRadioHovered && (
              <div
                className="
                  absolute
                  -top-8
                  md:-top-10
                  left-1/2
                  -translate-x-1/2
                  text-dark
                  text-xs
                  md:text-sm
                  font-figtree
                  text-center
                  whitespace-nowrap
                  z-[20]
                  bg-lightgray
                  py-1
                  px-2
                  rounded-sm
                  border
                  border-darkgray
                "
              >
                {isMusicPlaying
                  ? "Stop Music"
                  : "Play Music"}
              </div>
            )}

            {isNavbarVisible ? (
              <MusicNote
                className={`
                  thumb-c
                  h-full
                  w-full
                  transition-all
                  duration-200
                  ${
                    isMusicPlaying
                      ? "text-niceorange"
                      : isDarkMode
                      ? "text-light"
                      : "text-dark"
                  }
                `}
                style={{
                  color: isMusicPlaying
                    ? "var(--color-niceorange)"
                    : isDarkMode
                    ? "var(--color-dark)"
                    : "var(--color-dark)",
                }}
              />
            ) : (
              <img
                src={isDarkMode ? radioDark : radio}
                alt="radio"
                className="
                  thumb-c
                  h-full
                  w-full
                  object-contain
                "
              />
            )}
          </div>

          {/* NAVBAR SOCIAL ICONS */}

          {isNavbarVisible ? (
            <div
              className="
                bg-lightgray
                rounded-md
                px-2
                md:px-4
                py-1
                md:py-2
                flex
                items-center
                gap-2
                md:gap-3
              "
            >
              {/* GITHUB */}

              <a href="https://github.com/FreddySam09">
                <GithubLogo
                  className="
                    h-4
                    w-4
                    md:h-5
                    md:w-5
                    text-dark
                    hover:scale-120
                    transition
                    hover:text-niceorange
                    hover:rotate-2
                  "
                />
              </a>

              {/* LINKEDIN */}

              <a href="https://www.linkedin.com/in/freddy-samjacob/">
                <LinkedInLogo
                  className="
                    h-4
                    w-4
                    md:h-5
                    md:w-5
                    text-dark
                    hover:scale-120
                    transition
                    hover:text-niceorange
                    hover:rotate-2
                  "
                />
              </a>

              {/* EMAIL */}

              <a href="mailto:freddysamv@gmail.com">
                <MailLogo
                  className="
                    h-5
                    w-5
                    md:h-6
                    md:w-6
                    text-dark
                    hover:scale-120
                    transition
                    hover:text-niceorange
                    hover:rotate-2
                  "
                />
              </a>
            </div>
          ) : (
            <>
              {/* Desktop GitHub Block */}

              <div
                className="
                  hidden
                  md:block
                  relative
                  h-14
                  w-14
                  ml-1
                  md:ml-2
                  mb-1
                  z-0
                  group
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:-translate-y-1
                  hover:-rotate-2
                "
              >
                <img
                  src={isDarkMode ? blockDark : block}
                  alt="Github block"
                  className="h-full w-full object-contain"
                />

                <a href="https://github.com/FreddySam09">
                  <GithubLogo
                    className="
                      absolute
                      inset-0
                      m-auto
                      h-7
                      w-7
                      transition-colors
                      duration-300
                      group-hover:text-niceorange
                    "
                  />
                </a>
              </div>

              {/* Desktop LinkedIn Block */}

              <div
                className="
                  hidden
                  md:block
                  relative
                  h-14
                  w-14
                  -ml-5
                  -mr-4
                  mb-1
                  z-0
                  group
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:-translate-y-1
                  hover:rotate-2
                "
              >
                <img
                  src={isDarkMode ? blockDark : block}
                  alt="LinkedIn block"
                  className="h-full w-full object-contain"
                />

                <a href="https://www.linkedin.com/in/freddy-samjacob/">
                  <LinkedInLogo
                    className="
                      absolute
                      inset-0
                      m-auto
                      h-7
                      w-7
                      transition-colors
                      duration-300
                      group-hover:text-niceorange
                    "
                  />
                </a>
              </div>

              {/* Desktop Email Block */}

              <div
                className="
                  hidden
                  md:block
                  relative
                  h-14
                  w-14
                  -ml-22
                  mb-14
                  z-0
                  group
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:-translate-y-1
                  hover:-rotate-3
                "
              >
                <img
                  src={isDarkMode ? blockDark : block}
                  alt="Mail block"
                  className="h-full w-full object-contain"
                />

                <a href="mailto:freddysamv@gmail.com">
                  <MailLogo
                    className="
                      absolute
                      inset-0
                      m-auto
                      h-7
                      w-7
                      transition-colors
                      duration-300
                      group-hover:text-niceorange
                    "
                  />
                </a>
              </div>
            </>
          )}

          {/* THEME TOGGLE */}

          {isNavbarVisible ? (
            <button
              type="button"
              onClick={toggleLamp}
              aria-label={
                isDarkMode
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              className="
                normal-c
                relative
                flex
                items-center
                justify-center
                h-5
                w-5
                md:h-7
                md:w-7
                ml-1
                rounded-full
                transition-all
                duration-300
                hover:scale-110
                focus:outline-none
              "
            >
              <span
                className={`
                  block
                  h-full
                  w-full
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    isDarkMode
                      ? "bg-niceorange"
                      : "bg-dark"
                  }
                `}
              />
            </button>
          ) : (
            <div
              className="
                normal-c
                relative
                h-[calc(20vw+40px)]
                w-[calc(16vw+32px)]
                md:h-46
                md:w-38
                -mb-2
                object-contain
              "
              onClick={toggleLamp}
              role="button"
              aria-label={
                isDarkMode
                  ? "Turn Off Lamp"
                  : "Turn On Lamp"
              }
              tabIndex={0}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {
                  e.preventDefault();
                  toggleLamp();
                }
              }}
            >
              {isDarkMode && (
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[calc(8vw+16px)]
                    md:w-20
                    h-[calc(8vw+16px)]
                    md:h-20
                    bg-niceorange
                    blur-xl
                    opacity-50
                    rounded-full
                    z-[-1]
                  "
                />
              )}

              <img
                src={isDarkMode ? lampOn : lamp}
                alt="lamp"
                className="
                  thumb-c
                  h-full
                  w-full
                  object-contain
                  transition-all
                  duration-500
                  ease-in-out
                "
              />
            </div>
          )}
        </div>

        {/* TABLE BAR */}

        <div
          className={`
            absolute
            ${
              isNavbarVisible
                ? `
                  bottom-0
                  left-0
                  w-full
                  h-px
                  bg-darkgray
                `
                : `
                  border-dark
                  border-[1.5px]
                  bottom-0
                  h-3
                  w-[90%]
                  md:w-[85%]
                  bg-lightgray
                `
            }
            rounded-sm
            z-10
            transition-all
            duration-300
          `}
        />

        <audio
          ref={audioRef}
          src={music}
          loop
          preload="auto"
        />
      </div>

      <div
        className="
          justify-center
          text-center
          font-figtree
          font-semibold
          text-xs
          text-darkgray
          mt-16
          -mb-16
          block
          md:hidden
          animate-pulse
        "
      >
        Open in Desktop for a better experience
      </div>
    </>
  );
}