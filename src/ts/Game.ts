import { GameChoiceType, WinnerType } from "./types";
import startGame from "./utils/startGame";
import renderResult from "./utils/renderResult";

// player score variables
let playerScore: number = 0;

const choices = ["rock", "paper", "scissors"] as const;

const winningMap: Record<string, string> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const playerScoreElement = document.getElementById(
  "player-score",
) as HTMLElement;

function getRandomChoice(): GameChoiceType {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(
  playerChoice: GameChoiceType,
  houseChoice: GameChoiceType,
): WinnerType {
  if (playerChoice === houseChoice) return "draw";

  return winningMap[playerChoice] === houseChoice ? "player" : "house";
}

function updatePlayerScore({ winner }: { winner: WinnerType }) {
  if (winner === "player") {
    setTimeout(() => {
      playerScore += 1;
      playerScoreElement.textContent = playerScore.toString();
    }, 1000);
  }
}

function handleChoice(playerChoice: GameChoiceType) {
  const houseChoice = getRandomChoice();
  const winner = determineWinner(playerChoice, houseChoice);

  updatePlayerScore({ winner });
  renderResult({
    playerChoice,
    houseChoice,
    winner,
    playAgainAction: handleChoice,
  });
}

startGame({ handleChoice });