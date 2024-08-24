import { choiceButtonPropType } from "../types";

function ChoiseButton({
  name,
  onClickAction,
  disabled,
  absulutePosition,
  size,
  isWinner,
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
    <div
      className={`${
        absulutePosition ? buttons[name].position : "relative"
      } z-10`}
    >
      <span
        className={`duration-1000 absolute inset-0 opacity-10 -z-10 rounded-full bg-white before:absolute before:w-full before:h-full before:rounded-full before:bg-white before:opacity-30 before:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:bg-white after:opacity-20 before:scale-[1.2] after:scale-[1.4] ${
          isWinner ? "scale-[1.2]" : "scale-0"
        }`}
      />
      <button
        onClick={handleClick}
        className={`${
          sizeClass[size]
        } transition-all rounded-full flex justify-center items-center cursor-pointer z-20 ${
          buttons[name].color
        } ${disabled ? "pointer-events-none" : ""} ${
          absulutePosition ? buttons[name].position : ""
        }
        ${!disabled ? "hover:scale-105" : ""}
        `}
      >
        <div className="bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center">
          <img
            src={buttons[name].img}
            className="w-2/5 select-none pointer-events-none"
            alt={name}
          />
        </div>
      </button>
    </div>
  );
}

export default ChoiseButton;
