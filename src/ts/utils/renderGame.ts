import GameChoice from "../components/GameChoice";

export default function renderStep1({
  handleChoice,
}: {
  handleChoice: (choice: string) => void;
}) {
  const gameBoard = document.getElementById("game-board") as HTMLElement;
  const choices = ["rock", "paper", "scissors"] as const;

  const stepContainer = document.createElement("div");
  stepContainer.className = "relative w-full h-full";

  stepContainer.innerHTML = `
   <img
      class="pointer-events-none select-none w-full p-8"
      src="images/bg-triangle.svg"
      alt="triangle"
    />
    `;

  gameBoard.appendChild(stepContainer);

  choices.forEach((choice) => {
    const button = GameChoice({
      name: choice,
      absulutePosition: true,
      onClick: () => handleChoice(choice),
    });

    stepContainer.appendChild(button);
  });
}
