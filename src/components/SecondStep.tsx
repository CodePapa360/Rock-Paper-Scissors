import { useEffect, useState } from "react";
import { useGame } from "../context/gameContext";
import ChoiseButton from "./ChoiseButton";

function SecondStep() {
  const { userChoice, houseChoice, updateScore, replay, winner } = useGame();
  const [thinking, setThinking] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const delay = 1300;

  useEffect(() => {
    const thinkingTimeout = setTimeout(() => {
      setThinking(false);

      if (winner === "player") updateScore();
    }, delay);

    const resultTimeout = setTimeout(() => {
      setShowResult(true);
    }, delay + delay / 3);

    return () => {
      clearTimeout(thinkingTimeout);
      clearTimeout(resultTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="flex gap-4 sm:gap-10">
        <div className="flex md:flex-col-reverse flex-col gap-8 place-items-center h-full">
          {userChoice && (
            <ChoiseButton name={userChoice} disabled={true} size="large" />
          )}
          <p className="uppercase text-center tracking-widest text-base md:text-2xl">
            You picked
          </p>
        </div>

        <div className="flex md:flex-col-reverse flex-col gap-8 place-items-center h-full">
          {houseChoice && !thinking && (
            <ChoiseButton name={houseChoice} disabled={true} size="large" />
          )}
          {thinking && (
            <div className="relative bg-slate-700/20 rounded-full size-24 sm:size-40 md:size-60 flex justify-center items-center text-2xl select-none p-4">
              <span className="absolute animate-ping size-1/2 bg-slate-700/60 rounded-full"></span>
              <span className="absolute animate-ping size-4/5 bg-slate-700/60 rounded-full"></span>
            </div>
          )}
          <p className="uppercase text-center tracking-widest text-base md:text-2xl">
            House picked
          </p>
        </div>
      </div>

      {showResult && (
        <div className="flex flex-col items-center">
          <p className="uppercase text-5xl sm:text-5xl mb-4 text-center font-bold">
            {winner === "player"
              ? "You win"
              : winner === "house"
              ? "You lose"
              : "Draw"}
          </p>
          <button
            onClick={replay}
            className="uppercase bg-slate-100 rounded-md px-14 py-2 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-all border-2 border-slate-100"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default SecondStep;
