import GameChoice from "../components/GameChoice";
import RuleDialog from "../components/RuleDialog";
import { GameChoiceType } from "../types";

export default function startGame({
  handleChoice,
}: {
  handleChoice: (choice: GameChoiceType) => void;
}) {
  const gameBoard = document.getElementById("game-board") as HTMLElement;
  const choices = ["rock", "paper", "scissors"] as const;

  const stepContainer = document.createElement("div");
  stepContainer.className = "relative w-full h-full w-[80%] mx-auto";

  stepContainer.innerHTML = `
   <img
      class="pointer-events-none select-none w-full p-8"
      src="images/bg-triangle.svg"
      alt="triangle"
    />
    `;

  gameBoard.innerHTML = "";

  gameBoard.appendChild(stepContainer);

  choices.forEach((choice: GameChoiceType) => {
    const button = GameChoice({
      name: choice,
      absulutePosition: true,
      onClick: () => handleChoice(choice),
    });

    stepContainer.appendChild(button);
  });

  RuleDialog();
}
