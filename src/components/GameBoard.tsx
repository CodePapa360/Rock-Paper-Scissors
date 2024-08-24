import FirstStep from "./FirstStep";
import { useGame } from "../context/gameContext";
import SecondStep from "./SecondStep";

function GameBoard() {
  const { step } = useGame();

  return (
    <div className="flex justify-center items-center flex-col">
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
    </div>
  );
}

export default GameBoard;
