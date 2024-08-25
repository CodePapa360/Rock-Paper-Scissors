import BeginningStep from "./BeginningStep";
import { useGame } from "../context/gameContext";
import ResultStep from "./ResultStep";

function GameBoard() {
  const { isResultStep } = useGame();

  return (
    <div className="flex justify-center items-center flex-col">
      {isResultStep ? <ResultStep /> : <BeginningStep />}
    </div>
  );
}

export default GameBoard;
