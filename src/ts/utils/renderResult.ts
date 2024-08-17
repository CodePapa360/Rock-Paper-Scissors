import GameChoice from "../components/GameChoice";
import { GameChoiceType, WinnerType } from "../types";
import startGame from "./startGame";

function renderResult({
  playerChoice,
  houseChoice,
  winner,
  playAgainAction,
}: {
  playerChoice: GameChoiceType;
  houseChoice: GameChoiceType;
  winner: WinnerType;
  playAgainAction: (choice: GameChoiceType) => void;
}) {
  const gameBoard = document.getElementById("game-board") as HTMLElement;

  const stepContainer = document.createElement("div") as HTMLElement;
  stepContainer.className =
    "grid grid-cols-2 grid-rows-1 gap-y-10 gap-x-10 sm:gap-y-16 sm:gap-x-20 place-items-center";

  const playerContainer = document.createElement("div") as HTMLElement;
  playerContainer.className =
    "flex md:flex-col-reverse flex-col gap-8 place-items-center h-full";

  const playerButton = GameChoice({
    name: playerChoice,
    disabled: true,
  });

  const playerText = document.createElement("p") as HTMLElement;
  playerText.className = "uppercase text-center";
  playerText.textContent = "You picked";

  playerContainer.appendChild(playerButton);
  playerContainer.appendChild(playerText);

  const houseContainer = document.createElement("div") as HTMLElement;
  houseContainer.className =
    "flex md:flex-col-reverse flex-col gap-8 place-items-center h-full";

  const housePlaceholder = document.createElement("div") as HTMLElement;
  housePlaceholder.className = "flex justify-center items-center h-full";

  const placeHolderCircle = document.createElement("div") as HTMLElement;
  placeHolderCircle.className =
    "w-24 h-24 sm:h-32 sm:w-32 rounded-full bg-slate-900/30";

  housePlaceholder.appendChild(placeHolderCircle);

  const houseText = document.createElement("p") as HTMLElement;
  houseText.className = "uppercase text-center";
  houseText.textContent = "The house picked";

  houseContainer.appendChild(housePlaceholder);
  houseContainer.appendChild(houseText);

  stepContainer.appendChild(playerContainer);
  stepContainer.appendChild(houseContainer);

  // clear all elements inside game board before appending new elements
  gameBoard.innerHTML = "";
  gameBoard.appendChild(stepContainer);

  // after 500 miliseconds, remove the placeholder circle and show the house choice

  setTimeout(() => {
    housePlaceholder.innerHTML = "";
    const houseButton = GameChoice({
      name: houseChoice,
      disabled: true,
    });
    housePlaceholder.appendChild(houseButton);
  }, 500);

  // after 1 seconds, add the result section

  setTimeout(() => {
    // add the new classes to the player button
    playerButton.className = `${playerButton.className} relative before:absolute before:w-full before:h-full before:rounded-full before:bg-white before:opacity-10 before:z-[-1] before:scale-[1.3] after:absolute after:w-full after:h-full after:rounded-full after:bg-white after:opacity-5 after:z-[-2] after:scale-[1.7] before:shadow-[0_0_0_50px_rgba(255,255,255,.2)]`;

    // add the result section
    const resultSection = document.createElement("div") as HTMLElement;
    resultSection.className = "col-span-2 flex flex-col";

    const resultText = document.createElement("p") as HTMLElement;
    resultText.className = "uppercase text-2xl sm:text-5xl mb-4 text-center";
    resultText.textContent =
      winner === "player"
        ? "You win"
        : winner === "house"
          ? "You lose"
          : "Draw";

    const playAgainButton = document.createElement("button") as HTMLElement;
    playAgainButton.className =
      "uppercase bg-slate-100 rounded-md px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-all border-2 border-slate-100";
    playAgainButton.textContent = "Play again";

    resultSection.appendChild(resultText);
    resultSection.appendChild(playAgainButton);

    stepContainer.appendChild(resultSection);

    playAgainButton.addEventListener("click", () => {
      startGame({ handleChoice: playAgainAction });
    });
  }, 1000);
}

export default renderResult;
