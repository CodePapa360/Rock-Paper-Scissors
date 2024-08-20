import "./index.css";
import ruleModal from "./ts/components/ruleModal";
import startGame from "./ts/utils/startGame";

function initGame() {
  startGame();
  ruleModal();
}

initGame();

