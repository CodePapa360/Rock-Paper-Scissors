import { GrPowerReset } from "react-icons/gr";
import { useGame } from "../context/gameContext";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

function Header() {
  const { score, reset } = useGame();
  const scaling = useAnimationControls();
  const fadeScore = useAnimationControls();

  useEffect(() => {
    if (!score) return;

    fadeScore.start({
      opacity: [1, 0],
      y: ["-10%", "-100%"],
      scale: [1, 0],
      transition: {
        duration: 1,
      },
    });

    scaling.start({
      rotate: [0, 10, -10, 0],
      scale: [1, 1.2, 1.2, 1],
      transition: {
        duration: 0.5,
      },
    });
  }, [score, scaling, fadeScore]);

  return (
    <header>
      <h1 className="sr-only">
        Welcome to the Rock-Paper-Scissors Game v3 by Alamin
      </h1>
      <div className="flex justify-between items-center border-2 p-2 sm:py-4 sm:px-7 border-slate-400 rounded-md sm:rounded-2xl mb-10 select-none w-full max-w-[44rem] mx-auto sm:mt-4 h-24 sm:h-[9.5rem]">
        <div className="pointer-events-none max-w-28 px-4 sm:max-w-44 sm:px-2">
          <img
            className="h-full w-full object-contain"
            src="images/logo.svg"
            alt="Logo"
          />
        </div>

        <motion.div className="relative bg-white rounded-md p-2 h-full w-24 sm:w-36 flex justify-center items-center flex-col">
          <span className="text-blue-700 uppercase tracking-wider text-xs sm:text-base">
            Score
          </span>
          <div
            className="relative text-slate-600 text-4xl sm:text-6xl font-bold"
            id="player-score"
          >
            {score > 0 && (
              <motion.span
                className="absolute top-0 left-0 right-0 flex justify-center items-center bottom-0"
                animate={fadeScore}
              >
                +{score}
              </motion.span>
            )}

            {score}
          </div>

          {score > 0 && (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ rotate: 360 }}
              transition={{ spring: false }}
              title="Reset Score"
              onClick={() => reset()}
              className="absolute bottom-0 right-0 p-1 sm:p-2 bg-slate-900/10 text-slate-600 hover:bg-slate-300 rounded-full cursor-pointer"
            >
              <GrPowerReset size={20} />
            </motion.button>
          )}
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
