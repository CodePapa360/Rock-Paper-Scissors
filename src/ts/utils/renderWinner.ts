import choiceButton from "../components/choiceButton";
import { choiceButtonType } from "../types";
import determineWinner from "./determineWinner";
import getRandomChoice from "./getRandomChoise";
import startGame from "./startGame";
import UpdateElement from "./updateElement";
import { updateScore } from "./updateScore";

function renderWinner(playerChoice: choiceButtonType) {
  const delay = 1000;
  const houseChoice = getRandomChoice();
  const winner = determineWinner(playerChoice, houseChoice);

  const gameBoard = document.getElementById("game-board") as HTMLDivElement;
  const stepContainer = document.createElement("div") as HTMLDivElement;
  const playerContainer = document.createElement("div") as HTMLDivElement;
  const houseContainer = document.createElement("div") as HTMLDivElement;
  const housePlaceholder = document.createElement("div") as HTMLDivElement;
  const placeHolderCircle = document.createElement("div") as HTMLDivElement;
  const resultSection = document.createElement("div") as HTMLDivElement;
  const playerText = document.createElement("p") as HTMLParagraphElement;
  const houseText = document.createElement("p") as HTMLParagraphElement;
  const resultText = document.createElement("p") as HTMLParagraphElement;
  const playAgainButton = document.createElement("button") as HTMLButtonElement;

  stepContainer.className =
    "grid grid-cols-2 grid-rows-1 gap-y-10 gap-x-10 sm:gap-y-16 sm:gap-x-20 place-items-center";
  playerContainer.className =
    "flex md:flex-col-reverse flex-col gap-8 place-items-center h-full";
  playerText.className = "uppercase text-center";
  houseContainer.className =
    "flex md:flex-col-reverse flex-col gap-8 place-items-center h-full";
  housePlaceholder.className = "flex justify-center items-center h-full";
  placeHolderCircle.className =
    "w-24 h-24 sm:h-32 sm:w-32 rounded-full bg-slate-900/30";
  houseText.className = "uppercase text-center";
  resultSection.className = "col-span-2 flex flex-col";
  resultText.className = "uppercase text-2xl sm:text-5xl mb-4 text-center";
  playAgainButton.className =
    "uppercase bg-slate-100 rounded-md px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition-all border-2 border-slate-100";

  playerText.textContent = "You picked";
  houseText.textContent = "The house picked";
  playAgainButton.textContent = "Play again";
  resultText.textContent =
    winner === "player" ? "You win" : winner === "house" ? "You lose" : "Draw";

  const playerButton = choiceButton({
    name: playerChoice,
    disabled: true,
  });
  const houseButton = choiceButton({
    name: houseChoice,
    disabled: true,
  });

  playAgainButton.addEventListener("click", () => startGame());

  playerContainer.appendChild(playerButton);
  playerContainer.appendChild(playerText);
  housePlaceholder.appendChild(placeHolderCircle);
  houseContainer.appendChild(housePlaceholder);
  houseContainer.appendChild(houseText);
  stepContainer.appendChild(playerContainer);
  stepContainer.appendChild(houseContainer);

  // update game board
  UpdateElement({ parentEl: gameBoard, childEl: stepContainer });

  function appendHouseButton() {
    UpdateElement({ parentEl: housePlaceholder, childEl: houseButton });
    setTimeout(appendResultSection, delay / 1.5);
  }

  function appendResultSection() {
    playerButton.className = `${playerButton.className} relative before:absolute before:w-full before:h-full before:rounded-full before:bg-white before:opacity-10 before:z-[-1] before:scale-[1.3] after:absolute after:w-full after:h-full after:rounded-full after:bg-white after:opacity-5 after:z-[-2] after:scale-[1.7] before:shadow-[0_0_0_50px_rgba(255,255,255,.2)]`;
    resultSection.appendChild(resultText);
    resultSection.appendChild(playAgainButton);
    stepContainer.appendChild(resultSection);
    updateScore({ winner });
  }

  setTimeout(appendHouseButton, delay);
}

export default renderWinner;
