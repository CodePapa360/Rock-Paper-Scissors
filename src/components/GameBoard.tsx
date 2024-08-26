import { AnimatePresence } from "framer-motion";
import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";
import ThinkingAnim from "./ThinkingAnim";
import Result from "./Result";
import { useEffect } from "react";

function GameBoard() {
  const {
    isResultStep,
    winner,
    choices,
    houseChoice,
    userChoice,
    isThinking,
    isVisibleResult,
    updateIsResultStep,
    updateIsThinking,
    updateIsVisibleResult,
    updateChoice,
    updateScore,
  } = useGame();

  const delay = 1000;

  useEffect(() => {
    if (!isResultStep) return;

    const thinkingTimeout = setTimeout(() => {
      updateIsThinking(false);

      if (winner === "player") updateScore();
    }, delay);

    const resultTimeout = setTimeout(() => {
      updateIsVisibleResult(true);
    }, delay + delay / 3);

    return () => {
      clearTimeout(thinkingTimeout);
      clearTimeout(resultTimeout);
    };
  }, [winner, isResultStep]);

  function handleClickAction(choice: choiceButtonType) {
    updateChoice(choice);
    updateIsResultStep(true);
    updateIsThinking(true);
  }

  const choicesToRender = userChoice ? [userChoice] : choices;

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={`flex flex-col gap-4 sm:gap-20 items-center justify-center relative`}
      >
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
                size="normal"
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
                  size="normal"
                  absulutePosition={false}
                />
              )
            )}
          </div>

          {isVisibleResult && <Result key="result-section" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GameBoard;
