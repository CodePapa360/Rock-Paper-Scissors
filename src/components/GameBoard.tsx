import { AnimatePresence } from "framer-motion";
import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";
import { useEffect, useState } from "react";
import ThinkingAnim from "./ThinkingAnim";
import Result from "./Result";

function GameBoard() {
  const { isResultStep, updateIsResultStep, winner } = useGame();
  const { choices, houseChoice, userChoice, updateChoice, updateScore } =
    useGame();
  const [isThinking, setIsThinking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const delay = 1200;

  useEffect(() => {
    if (!isResultStep) return;

    const thinkingTimeout = setTimeout(() => {
      setIsThinking(false);

      if (winner === "player") updateScore();
    }, delay);

    const resultTimeout = setTimeout(() => {
      setShowResult(true);
    }, delay + delay / 3);

    return () => {
      clearTimeout(thinkingTimeout);
      clearTimeout(resultTimeout);
    };
  }, [winner, isResultStep, updateScore]);

  function handleClickAction(choice: choiceButtonType) {
    updateChoice(choice);
    updateIsResultStep(true);
    setIsThinking(true);
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

          {showResult && (
            <Result setShowResult={setShowResult} key="result-section" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GameBoard;
