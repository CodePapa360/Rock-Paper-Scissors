import choiceButton from "../components/choiceButton";
import { choiceButtonType } from "../types";
import determineWinner from "./determineWinner";
import getRandomChoice from "./getRandomChoise";
import renderWinner from "./renderWinner";
import { updateScore } from "./updateScore";

export default function startGame() {
  const choices = ["rock", "paper", "scissors"] as const;
  const gameBoard = document.getElementById("game-board") as HTMLElement;

  // create step container
  const stepContainer = document.createElement("div");
  stepContainer.className = "relative w-full h-full w-[80%] mx-auto";
  stepContainer.innerHTML = `
   <img
      class="pointer-events-none select-none w-full p-8"
      src="images/bg-triangle.svg"
      alt="triangle"
    />
    `;

  // clear all elements inside game board before appending new elements
  gameBoard.innerHTML = "";
  gameBoard.appendChild(stepContainer);

  // create choice buttons
  choices.forEach((choice: choiceButtonType) => {
    const button = choiceButton({
      name: choice,
      absulutePosition: true,
      onClick: () => handleChoice(choice),
    });

    stepContainer.appendChild(button);
  });

  // handle choice click
  function handleChoice(playerChoice: choiceButtonType) {
    const houseChoice = getRandomChoice();
    const winner = determineWinner(playerChoice, houseChoice);

    updateScore({ winner });
    renderWinner({
      playerChoice,
      houseChoice,
      winner,
    });
  }
}
