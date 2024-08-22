import { useState } from "react";
import { BiReset } from "react-icons/bi";

function Header() {
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <header>
      <h1 className="sr-only">
        Welcome to the Rock-Paper-Scissors Game by Alamin
      </h1>
      <div className="flex justify-between items-center border-2 p-4 border-slate-400 rounded-md mb-4 select-none max-w-3xl mx-auto">
        <div className="max-w-[7rem] pointer-events-none">
          <img
            className="h-full w-full object-contain"
            src="images/logo.svg"
            alt="Logo"
          />
        </div>

        <div className="relative bg-white rounded-md p-2 size-28 flex justify-center items-center flex-col overflow-hidden">
          <span className="text-blue-700 uppercase tracking-wider">Score</span>
          <span className="text-slate-600 text-4xl font-bold" id="player-score">
            {playerScore}
          </span>

          <button
            onClick={() => setPlayerScore(0)}
            className="absolute bottom-0 right-0 p-2 bg-slate-200 text-slate-600 rounded-md cursor-pointer"
          >
            <BiReset size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
