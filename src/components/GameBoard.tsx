import { AnimatePresence } from "framer-motion";
import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";
import ThinkingAnim from "./ThinkingAnim";
import Result from "./Result";
import { motion } from "framer-motion";

function GameBoard() {
  const {
    isResultStep,
    winner,
    choices,
    houseChoice,
    userChoice,
    isThinking,
    isVisibleResult,
    updateChoice,
  } = useGame();

  function handleClickAction(choice: choiceButtonType) {
    updateChoice(choice);
  }

  const choicesToRender = userChoice ? [userChoice] : choices;

  return (
    <div className="flex flex-col gap-10 sm:gap-20 items-center justify-center relative">
      <div className="flex gap-8 sm:gap-20 items-center justify-center relative">
        <AnimatePresence mode="popLayout">
          {!isResultStep && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src="images/bg-triangle.svg"
              alt="triangle"
              className="pointer-events-none select-none h-full w-full p-10 sm:p-24"
            />
          )}
        </AnimatePresence>

        {choicesToRender.map((choice) => (
          <ChoiseButton
            key={choice}
            name={choice}
            isWinner={isVisibleResult && winner === "player"}
            absulutePosition={!isResultStep}
            onClickAction={handleClickAction}
            size={isResultStep ? "large" : "normal"}
            disabled={isResultStep}
          />
        ))}

        {isThinking ? (
          <ThinkingAnim />
        ) : (
          houseChoice && (
            <ChoiseButton
              name={houseChoice}
              isWinner={isVisibleResult && winner === "house"}
              disabled={true}
              size={isResultStep ? "large" : "normal"}
              absulutePosition={false}
            />
          )
        )}
      </div>

      <AnimatePresence>{isVisibleResult && <Result />}</AnimatePresence>
    </div>
  );
}

export default GameBoard;
