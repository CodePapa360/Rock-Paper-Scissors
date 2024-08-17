import { GameChoiceType, WinnerType } from "./types";
import startGame from "./utils/startGame";
import renderResult from "./utils/renderResult";

// game steps variables
// let gameSteps: number = 1;

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
    playerScore += 1;
  }

  playerScoreElement.textContent = playerScore.toString();
}

function handleChoice(playerChoice: GameChoiceType) {
  const houseChoice = getRandomChoice();
  const winner = determineWinner(playerChoice, houseChoice);

  // Update game steps
  //   gameSteps += 1;

  updatePlayerScore({ winner });
  renderResult({
    playerChoice,
    houseChoice,
    winner,
    playAgainAction: handleChoice,
  });
}

startGame({ handleChoice });
