import { useState } from "react";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import RulePopup from "./components/RulePopup";

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen p-2 bg-gradient-to-b from-slate-800 to-slate-900">
      {isRulesOpen && <RulePopup closeRule={setIsRulesOpen} />}

      <main className="grid grid-rows-[auto_1fr_auto] p-6">
        <Header />
        <GameBoard />
        <button
          onClick={() => setIsRulesOpen(!isRulesOpen)}
          className="uppercase ml-auto mr-auto sm:ml-auto sm:mr-0 transition-all tracking-widest mt-2 bg-slate-800/10 px-10 py-2 border-2 rounded-lg border-slate-100 text-slate-100 hover:bg-slate-100 hover:text-slate-800"
        >
          Rules
        </button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
