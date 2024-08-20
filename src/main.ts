import "./index.css";
import ruleModal from "./ts/components/ruleDialog.ts";
import startGame from "./ts/utils/startGame.ts";

function initGame() {
  startGame();
  ruleModal();
}

initGame();

