import { useGame } from "../context/gameContext";
import ChoiseButton from "./ChoiseButton";

function GameBoard() {
  const { score, step, choices } = useGame();

  console.log(choices, score, step);

  return (
    <div className="flex justify-center items-center">
      <div>
        {step === 1 &&
          choices.map((choice) => <ChoiseButton key={choice} name={choice} />)}
      </div>
    </div>
  );
}

export default GameBoard;
