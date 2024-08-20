import { winnerType } from "../types";

let playerScore: number = 0;

export function updateScore({ winner }: { winner: winnerType }) {
  const playerScoreElement = document.getElementById(
    "player-score",
  ) as HTMLSpanElement;

  if (winner === "player") {
    playerScore += 1;
    playerScoreElement.textContent = playerScore.toString();
  }
}
