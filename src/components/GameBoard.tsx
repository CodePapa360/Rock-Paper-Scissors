import BeginningStep from "./BeginningStep";
import { useGame } from "../context/gameContext";
import ResultStep from "./ResultStep";

function GameBoard() {
  const { step } = useGame();

  return (
    <div className="flex justify-center items-center flex-col">
      {step === 1 && <BeginningStep />}
      {step === 2 && <ResultStep />}
    </div>
  );
}

export default GameBoard;
