import { choiceButtonPropType } from "../types";

function ChoiseButton({
  name,
  onClickAction,
  disabled,
  absulutePosition,
}: choiceButtonPropType) {
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
      className={`active:size-28 size-32 sm:size-48 sm:active:size-44 rounded-full flex justify-center items-center cursor-pointer transition-all ${
        buttons[name].color
      } ${disabled ? "pointer-events-none" : ""} ${
        absulutePosition ? buttons[name].position : ""
      }
      ${!disabled ? "hover:scale-105" : ""}`}
    >
      <div className="bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center">
        <img src={buttons[name].img} className="w-2/5" alt={name} />
      </div>
    </button>
  );
}

export default ChoiseButton;
