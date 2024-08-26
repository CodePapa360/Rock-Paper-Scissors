import { choiceButtonPropType } from "../types";
import { motion } from "framer-motion";

function ChoiseButton({
  name,
  onClickAction,
  disabled,
  absulutePosition,
  size,
  isWinner,
}: choiceButtonPropType) {
  const sizeClass = {
    normal: "md:size-48",
    large: "md:size-60",
  };

  const positions = {
    rock: "absolute bottom-0 left-1/2 -translate-x-1/2",
    paper: "absolute top-0 left-0",
    scissors: "absolute top-0 right-0",
  };

  const buttons = {
    rock: {
      color: "bg-red-500",
      position: absulutePosition ? positions[name] : "relative",
      img: "images/icon-rock.svg",
    },
    paper: {
      color: "bg-blue-500",
      position: absulutePosition ? positions[name] : "relative",
      img: "images/icon-paper.svg",
    },
    scissors: {
      color: "bg-yellow-500",
      position: absulutePosition ? positions[name] : "relative",
      img: "images/icon-scissors.svg",
    },
  };

  function handleClick() {
    if (onClickAction && !disabled) {
      onClickAction(name);
    }
  }

  return (
    <div className={`${buttons[name].position} `}>
      <motion.button
        layout
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1 }}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={`
        ${sizeClass[size]} 
        
        ${buttons[name].color} 
        ${disabled ? "pointer-events-none" : ""} 
        size-28 sm:size-40 active:scale-95 rounded-full flex justify-center items-center cursor-pointer z-20`}
      >
        <span
          className={`
          ${isWinner ? "scale-[1.2]" : "scale-0"}
          duration-1000 absolute inset-0 opacity-10 -z-10 rounded-full bg-white before:absolute before:w-full before:h-full before:rounded-full before:bg-white before:opacity-30 before:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:bg-white after:opacity-20 before:scale-[1.2] after:scale-[1.4] flex justify-center items-center`}
        />

        <span className="bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center">
          <img
            src={buttons[name].img}
            className="w-2/5 select-none pointer-events-none"
            alt={name}
          />
        </span>
      </motion.button>
    </div>
  );
}

export default ChoiseButton;
