import { choiceButtonPropType } from "../types";

function ChoiseButton({
  name,
  onClickAction,
  disabled,
  absulutePosition,
  size,
}: choiceButtonPropType) {
  const sizeClass = {
    normal:
      "size-24 sm:size-40 md:size-48 active:size-20 sm:active:size-36 md:active:size-44",
    large:
      "size-24 sm:size-40 md:size-60 active:size-20 sm:active:size-36 md:active:size-56",
  };

  const buttons = {
    rock: {
      color: "bg-red-500",
      position: "absolute bottom-0 left-1/2 -translate-x-1/2",
      img: "images/icon-rock.svg",
    },
    paper: {
      color: "bg-blue-500",
      position: "absolute top-0 left-0",
      img: "images/icon-paper.svg",
    },
    scissors: {
      color: "bg-yellow-500",
      position: "absolute top-0 right-0",
      img: "images/icon-scissors.svg",
    },
  };

  function handleClick() {
    if (onClickAction && !disabled) {
      onClickAction(name);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${
        sizeClass[size]
      } rounded-full flex justify-center items-center cursor-pointer transition-all ${
        buttons[name].color
      } ${disabled ? "pointer-events-none" : ""} ${
        absulutePosition ? buttons[name].position : ""
      }
      ${!disabled ? "hover:scale-105" : ""}`}
    >
      <div className="bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center">
        <img
          src={buttons[name].img}
          className="w-2/5 select-none pointer-events-none"
          alt={name}
        />
      </div>
    </button>
  );
}

export default ChoiseButton;
