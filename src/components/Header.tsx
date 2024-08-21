function Header() {
  return (
    <header>
      <h1 className="sr-only">
        Welcome to the Rock-Paper-Scissors Game by Alamin
      </h1>
      <div className="flex justify-between items-center border-2 p-4 border-slate-400 rounded-md mb-4 pointer-events-none select-none max-w-3xl mx-auto">
        <div className="max-w-[7rem]">
          <img
            className="h-full w-full object-contain"
            src="images/logo.svg"
            alt="Logo"
          />
        </div>

        <div className="bg-white rounded-md p-2 h-20 w-20 flex justify-center items-center flex-col">
          <span className="text-blue-700 uppercase tracking-wider text-sm">
            Score
          </span>
          <span className="text-slate-600 text-4xl font-bold" id="player-score">
            0
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
