import { useState } from "react";
import RulePopup from "./RulePopup";

function RuleBtn() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className=" ml-auto mr-auto sm:ml-auto sm:mr-0">
      {isRulesOpen && <RulePopup closeRule={setIsRulesOpen} />}

      <button
        onClick={() => setIsRulesOpen(!isRulesOpen)}
        className="uppercase transition-all tracking-widest mt-2 bg-slate-800/10 px-10 py-2 border-2 rounded-lg border-slate-100 text-slate-100 hover:bg-slate-100 hover:text-slate-800"
      >
        Rules
      </button>
    </div>
  );
}

export default RuleBtn;
