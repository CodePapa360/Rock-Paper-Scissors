import { IGameChoiceProps } from "../types";

function GameChoice({
  name,
  absulutePosition,
  onClick,
}: IGameChoiceProps): HTMLElement {
  const absoluteClasses = {
    rock: "absolute top-0 left-0",
    paper: "absolute top-0 right-0",
    scissors: "absolute bottom-0 left-1/2 -translate-x-1/2",
  };

  const imgSrc = {
    rock: "images/icon-rock.svg",
    paper: "images/icon-paper.svg",
    scissors: "images/icon-scissors.svg",
  };

  const colorClasses = {
    rock: "bg-red-500",
    paper: "bg-blue-500",
    scissors: "bg-yellow-500",
  };

  const choiceButton = document.createElement("div");
  choiceButton.className = `w-24 h-24 sm:h-32 sm:w-32 rounded-full flex justify-center items-center cursor-pointer ${colorClasses[name]} ${absulutePosition ? absoluteClasses[name] : ""}`;

  if (onClick) {
    choiceButton.addEventListener("click", onClick);
  }

  const iconContainer = document.createElement("div");
  iconContainer.className =
    "bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden h-3/4 w-3/4 flex justify-center items-center";

  const iconImage = document.createElement("img");
  iconImage.alt = name;
  iconImage.className = "w-2/5";

  iconImage.src = imgSrc[name];

  iconContainer.appendChild(iconImage);
  choiceButton.appendChild(iconContainer);

  return choiceButton;
}

export default GameChoice;
