import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import RuleBtn from "./components/RuleBtn";

function App() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-dvh p-2 bg-gradient-to-b from-slate-800 to-slate-900 overflow-x-hidden">
      <main className="grid grid-rows-[auto_1fr_auto] px-2 py-4 overflow-hidden">
        <Header />
        <GameBoard />
        <RuleBtn />
      </main>
      <Footer />
    </div>
  );
}

export default App;
