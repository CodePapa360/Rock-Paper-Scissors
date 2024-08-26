import { AnimatePresence } from "framer-motion";
import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";
import ThinkingAnim from "./ThinkingAnim";
import Result from "./Result";

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
    <div className="flex flex-col gap-4 sm:gap-20 items-center justify-center relative">
      <AnimatePresence>
        <div className="flex gap-4 sm:gap-20 items-center justify-center relative">
          {!isResultStep && (
            <img
              key="triangle-bg"
              src="images/bg-triangle.svg"
              alt="triangle"
              className="pointer-events-none select-none h-full w-full p-10 sm:p-24"
            />
          )}

          {choicesToRender.map((choice) => (
            <ChoiseButton
              key={choice}
              name={choice}
              isWinner={winner === "player"}
              absulutePosition={!isResultStep}
              onClickAction={handleClickAction}
              size={isResultStep ? "large" : "normal"}
              disabled={isResultStep}
            />
          ))}

          {isThinking ? (
            <ThinkingAnim key="thinking-anim" />
          ) : (
            houseChoice && (
              <ChoiseButton
                name={houseChoice}
                isWinner={winner === "house"}
                disabled={true}
                size={isResultStep ? "large" : "normal"}
                absulutePosition={false}
              />
            )
          )}
        </div>

        {isVisibleResult && <Result key="result-section" />}
      </AnimatePresence>
    </div>
  );
}

export default GameBoard;
