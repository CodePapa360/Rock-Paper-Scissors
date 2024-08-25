import { choiceButtonType, winnerType } from "../types";

const winningMap: Record<string, string> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export default function determineWinner(
  playerChoice: choiceButtonType,
  houseChoice: choiceButtonType,
): winnerType {
  if (playerChoice === houseChoice) return "draw";

  return winningMap[playerChoice] === houseChoice ? "player" : "house";
}
