import renderGame from "./utils/renderGame";
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

function getRandomChoice(): (typeof choices)[number] {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice: string, houseChoice: string): string {
  if (playerChoice === houseChoice) return "draw";

  return winningMap[playerChoice] === houseChoice ? "player" : "house";
}

function updatePlayerScore({ winner }: { winner?: string }) {
  if (winner === "player") {
    playerScore += 1;
  }
  playerScoreElement.textContent = String(playerScore);
}

function handleChoice(playerChoice: string) {
  const houseChoice = getRandomChoice();
  const winner = determineWinner(playerChoice, houseChoice);

  // Update game steps
  //   gameSteps += 1;

  updatePlayerScore({ winner });
  renderResult({ playerChoice, houseChoice, winner });
}

renderGame({ handleChoice });
