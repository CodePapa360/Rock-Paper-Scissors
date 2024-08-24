import {
  ActionType,
  choiceButtonType,
  GameStateType,
  WinnerType,
} from "../types";
import determineWinner from "../utils/determineWinner.ts";
import getRandomChoise from "../utils/getRandomChoise.ts";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

const initialState: GameStateType = {
  score: 0,
  step: 1,
  userChoice: null,
  houseChoice: null,
  winner: null,
  choices: ["rock", "paper", "scissors"],
};

// Define the context type
interface IGameContext extends GameStateType {
  dispatch: Dispatch<ActionType>;
  updateScore: (score: number) => void;
  updateStep: (step: number) => void;
  updateChoice: (choice: choiceButtonType) => void;
  replay: () => void;
  reset: () => void;
}

const GameContext = createContext<IGameContext | undefined>(undefined);

function reducer(state: GameStateType, action: ActionType) {
  switch (action.type) {
    case "UPDATE_SCORE":
      return { ...state, score: action.payload };
    case "UPDATE_STEP":
      return { ...state, step: action.payload };
    case "SET_USER_CHOICE":
      return { ...state, userChoice: action.payload };
    case "SET_HOUSE_CHOICE":
      return { ...state, houseChoice: action.payload };
    case "SET_WINNER":
      return { ...state, winner: action.payload };
    case "REPLAY":
      return {
        ...initialState,
        score: state.score,
      };
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function GameProvider({ children }: { children: ReactNode }) {
  const [{ score, step, userChoice, houseChoice, winner, choices }, dispatch] =
    useReducer(reducer, initialState);

  function updateScore(storageScore?: number) {
    if (storageScore) {
      dispatch({ type: "UPDATE_SCORE", payload: storageScore });
    } else {
      dispatch({ type: "UPDATE_SCORE", payload: score + 1 });
      localStorage.setItem("playerScore", String(score + 1));
    }
  }

  function updateStep(step: number) {
    dispatch({ type: "UPDATE_STEP", payload: step });
  }

  function updateChoice(choice: choiceButtonType) {
    // Update user choice
    dispatch({ type: "SET_USER_CHOICE", payload: choice });

    // Update house choice
    const houseChoice = getRandomChoise(choices);
    dispatch({ type: "SET_HOUSE_CHOICE", payload: houseChoice });

    // Update winner
    const winner = determineWinner(choice, houseChoice);
    setWinner(winner);

    // Update score
    if (winner === "player") {
      updateScore();
    }
  }

  function setWinner(winner: WinnerType) {
    dispatch({ type: "SET_WINNER", payload: winner });
  }

  function replay() {
    dispatch({ type: "REPLAY" });
  }

  function reset() {
    dispatch({ type: "RESET" });

    localStorage.removeItem("playerScore");
  }

  // utilizing local storage to save the score so when the user refresh the page the score will be saved
  useEffect(() => {
    const storageScore = localStorage.getItem("playerScore");
    if (storageScore) {
      updateScore(parseInt(storageScore));
    }
  }, []);

  const value: IGameContext = {
    score,
    step,
    userChoice,
    houseChoice,
    winner,
    choices,

    dispatch,
    updateScore,
    updateStep,
    updateChoice,
    replay,
    reset,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { GameProvider, useGame };
