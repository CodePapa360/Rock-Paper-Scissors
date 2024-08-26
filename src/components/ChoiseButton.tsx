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
    <div className={`${buttons[name].position}`}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {isWinner && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            className="absolute inset-0 z-10 opacity-20 rounded-full bg-white flex justify-center items-center"
          >
            <span className="absolute w-full h-full rounded-full bg-white opacity-30 scale-[1.2]" />
            <span className="absolute w-full h-full rounded-full bg-white opacity-20 scale-[1.4]" />
          </motion.span>
        )}

        <motion.button
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
          size-28 sm:size-40 active:scale-95 rounded-full flex justify-center items-center cursor-pointer z-20 relative`}
        >
          <span className="bg-white rounded-full shadow-inner shadow-slate-400 overflow-hidden size-3/4 flex justify-center items-center">
            <img
              src={buttons[name].img}
              className="w-2/5 select-none pointer-events-none"
              alt={name}
            />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ChoiseButton;
