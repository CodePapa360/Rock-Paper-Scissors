import { useGame } from "../context/gameContext";
import { motion } from "framer-motion";

function Result() {
  const { winner, replay } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-5"
    >
      <p className="uppercase text-5xl sm:text-5xl text-center font-bold">
        {winner === "player"
          ? "You win"
          : winner === "house"
          ? "You lose"
          : "Draw"}
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: "2.5deg" }}
        onClick={() => replay()}
        className="uppercase bg-slate-100 rounded-md px-14 py-2 text-slate-900 hover:bg-slate-900 hover:text-slate-100 border-2 border-slate-100"
      >
        Play again
      </motion.button>
    </motion.div>
  );
}

export default Result;
