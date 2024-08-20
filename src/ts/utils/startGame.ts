import choiceButton from "../components/choiceButton";
import { choiceButtonType } from "../types";
import renderWinner from "./renderWinner";
import updateGameBoard from "./updateGameBoard";

export default function startGame() {
  const choices = ["rock", "paper", "scissors"] as const;

  const stepContainer = document.createElement("div") as HTMLDivElement;
  const triangleImage = document.createElement("img") as HTMLImageElement;

  stepContainer.className = "relative w-full h-full w-[80%] mx-auto";
  triangleImage.className = "pointer-events-none select-none w-full p-8";

  triangleImage.src = "images/bg-triangle.svg";

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
  updateGameBoard(stepContainer);
}
