import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({
    x: -100,
    y: -100,
  });

  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const img = new Image();

    img.src = "/cursors/view-cursor.png";

    const handleMove = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;

      /*
        Never activate the View cursor anywhere
        inside the Poster Archive.
      */
      if (target.closest(".poster-archive")) {
        setCursorType("default");
        return;
      }

      /*
        Only activate the View cursor when the
        hovered element is explicitly a .view-c element.
      */
      if (target.closest(".view-c")) {
        setCursorType("view");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, []);

  const variants = {
    default: {
      opacity: 1,
      scale: 1,
      width: 12,
      height: 12,
    },

    view: {
      opacity: 1,
      scale: 1,
      width: 96,
      height: 96,
    },

    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={`
        fixed
        z-[9999]
        pointer-events-none
        rounded-full
        flex
        items-center
        justify-center

        ${
          cursorType === "view"
            ? "bg-dark border-light border-2"
            : "bg-none"
        }
      `}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
      variants={variants}
      animate={cursorType}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence>
        {cursorType === "view" && (
          <motion.div
            key="view-cursor"
            className="
              w-full
              h-full
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                "url(/cursors/view-cursor.png)",
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;