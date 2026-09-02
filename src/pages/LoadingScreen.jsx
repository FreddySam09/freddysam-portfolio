import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>

      {isLoading && (

        <motion.div
          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
            transition: {
              duration: 0.55,
              ease: "easeInOut",
            },
          }}

          className="
            fixed
            inset-0

            z-[99999]

            flex
            items-center
            justify-center

            bg-light
            text-dark
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
            "
          >

            <motion.div
              className="
                w-2.5
                h-2.5

                rounded-full

                bg-niceorange

                mb-5
              "

              animate={{
                scale: [1, 1.55, 1],
                opacity: [1, 0.45, 1],
              }}

              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            <motion.h1
              initial={{
                opacity: 0,
                y: 10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
              }}

              className="
                font-figtree
                font-bold

                text-2xl
                md:text-4xl

                tracking-tight
              "
            >
              FREDDY SAM
            </motion.h1>


            <p
              className="
                mt-2

                font-sue

                text-lg
                md:text-xl

                text-gray-500
                dark:text-gray-300
              "
            >
              loading things i made...
            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}