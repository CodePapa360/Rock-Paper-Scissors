import { IchoiceButtonProps } from "../types";

function choiceButton({
  name,
  absulutePosition,
  onClick,
  disabled,
}: IchoiceButtonProps): HTMLElement {
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

  const choiceButton = document.createElement("div") as HTMLDivElement;
  const iconContainer = document.createElement("div") as HTMLDivElement;
  const iconImage = document.createElement("img") as HTMLImageElement;

  choiceButton.className = `size-24 sm:size-32 rounded-full flex justify-center items-center cursor-pointer ${colorClasses[name]} ${absulutePosition ? absoluteClasses[name] : ""} ${disabled ? "pointer-events-none" : ""}`;
  iconContainer.className =
    "bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center";
  iconImage.className = "w-2/5";

  if (!disabled && onClick) choiceButton.addEventListener("click", onClick);

  iconImage.alt = name;
  iconImage.src = imgSrc[name];

  iconContainer.appendChild(iconImage);
  choiceButton.appendChild(iconContainer);

  return choiceButton;
}

export default choiceButton;
