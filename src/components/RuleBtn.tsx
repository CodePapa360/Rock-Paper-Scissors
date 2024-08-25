import { useState } from "react";
import RulePopup from "./RulePopup";
import { motion, AnimatePresence } from "framer-motion";

function RuleBtn() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className=" ml-auto mr-auto sm:ml-auto sm:mr-0">
      <AnimatePresence>
        {isRulesOpen && <RulePopup closeRule={setIsRulesOpen} />}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: "2.5deg" }}
        onClick={() => setIsRulesOpen(!isRulesOpen)}
        className="uppercase tracking-widest mt-2 bg-slate-800/10 px-10 py-2 border-2 rounded-lg border-slate-100 text-slate-100 hover:bg-slate-100 hover:text-slate-800"
      >
        Rules
      </motion.button>
    </div>
  );
}

export default RuleBtn;
