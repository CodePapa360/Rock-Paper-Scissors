import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen p-2 bg-gradient-to-b from-slate-800 to-slate-900">
      <main className="grid grid-rows-[auto_1fr]">
        <Header />
        <GameBoard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
