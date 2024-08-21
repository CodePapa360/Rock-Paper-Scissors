import choiceButton from "../components/choiceButton";
import { choiceButtonType } from "../types";
import renderWinner from "./renderWinner";
import updateElement from "./updateElement";
import { updateScore } from "./updateScore";

export default function startGame() {
  const choices = ["rock", "paper", "scissors"] as const;

  const gameBoard = document.getElementById("game-board") as HTMLDivElement;
  const stepContainer = document.createElement("div") as HTMLDivElement;
  const triangleImage = document.createElement("img") as HTMLImageElement;

  stepContainer.className = "relative w-full h-full max-w-[80%] mx-auto";
  triangleImage.className = "pointer-events-none select-none w-full p-8";

  triangleImage.src = "images/bg-triangle.svg";
  triangleImage.alt = "triangle background";

  stepContainer.appendChild(triangleImage);

  // create choice buttons
  choices.forEach((choice: choiceButtonType) => {
    const button = choiceButton({
      name: choice,
      absulutePosition: true,
      onClick: () => renderWinner(choice),
    });

    stepContainer.appendChild(button);
  });

  // update game board
  updateElement({ parentEl: gameBoard, childEl: stepContainer });
  updateScore({ firstTime: true });
}
