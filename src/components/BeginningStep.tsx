import { useGame } from "../context/gameContext";
import { choiceButtonType } from "../types";
import ChoiseButton from "./ChoiseButton";

function BeginningStep() {
  const { choices, updateChoice, updateStep } = useGame();

  function handleClickAction(choice: choiceButtonType) {
    updateChoice(choice);
    updateStep(2);
  }

  return (
    <div className="relative w-full max-w-xs sm:max-w-md">
      <img
        src="images/bg-triangle.svg"
        alt="triangle"
        className="pointer-events-none select-none h-full w-full p-10 sm:p-24"
      />

      {choices.map((choice) => (
        <ChoiseButton
          key={choice}
          name={choice}
          absulutePosition={true}
          onClickAction={handleClickAction}
          size="normal"
        />
      ))}
    </div>
  );
}

export default BeginningStep;
