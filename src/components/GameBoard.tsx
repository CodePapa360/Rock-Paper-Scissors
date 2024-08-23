import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";

function GameBoard() {
  const { step, choices, updateStep, setUserChoice } = useGame();

  function handleClickAction(name: choiceButtonType) {
    setUserChoice(name);
    updateStep(2);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-md">
        {step === 1 && (
          <>
            <img
              src="images/bg-triangle.svg"
              alt="triangle"
              className="pointer-events-none select-none h-full w-full p-20 sm:p-24"
            />

            {choices.map((choice) => (
              <ChoiseButton
                key={choice}
                name={choice}
                absulutePosition={true}
                onClickAction={handleClickAction}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default GameBoard;
