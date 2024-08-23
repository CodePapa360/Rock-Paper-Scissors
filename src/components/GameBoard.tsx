import { useGame } from "../context/gameContext";
import ChoiseButton from "./ChoiseButton";

function GameBoard() {
  const { step, choices } = useGame();

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-md">
        <img
          src="images/bg-triangle.svg"
          alt="triangle"
          className="pointer-events-none select-none h-full w-full p-20 sm:p-24"
        />

        {step === 1 &&
          choices.map((choice) => (
            <ChoiseButton key={choice} name={choice} absulutePosition={true} />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
