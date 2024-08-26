import { useGame } from "../context/gameContext";

function Result() {
  const { winner, replay } = useGame();

  return (
    <div className="flex flex-col items-center">
      <p className="uppercase text-5xl sm:text-5xl mb-4 text-center font-bold">
        {winner === "player"
          ? "You win"
          : winner === "house"
          ? "You lose"
          : "Draw"}
      </p>
      <button
        onClick={() => replay()}
        className="uppercase bg-slate-100 rounded-md px-14 py-2 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-all border-2 border-slate-100"
      >
        Play again
      </button>
    </div>
  );
}

export default Result;
