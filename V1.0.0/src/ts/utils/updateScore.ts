import { winnerType } from "../types";

let playerScore: number = 0;

export function updateScore({
  winner,
  firstTime,
}: {
  winner?: winnerType;
  firstTime: boolean;
}) {
  const playerScoreElement = document.getElementById(
    "player-score",
  ) as HTMLSpanElement;

  if (firstTime) {
    // get the score from local storage
    const playerScoreFromStorage = localStorage.getItem("playerScore");

    if (playerScoreFromStorage) {
      playerScore = parseInt(playerScoreFromStorage);
      playerScoreElement.textContent = playerScore.toString();
    }

    return;
  }

  if (winner === "player") {
    playerScore += 1;
    playerScoreElement.textContent = playerScore.toString();

    // store the score in local storage
    localStorage.setItem("playerScore", playerScore.toString());
  }
}
