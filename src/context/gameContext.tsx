import { ActionType, choiceButtonType, GameStateType } from "../types";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

const initialState: GameStateType = {
  score: 0,
  step: 1,
  userChoice: null,
  choices: ["rock", "paper", "scissors"],
};

// Define the context type
interface IGameContext {
  state: GameStateType;
  dispatch: Dispatch<ActionType>;
  updateScore: (score: number) => void;
  updateStep: (step: number) => void;
  setUserChoice: (choice: choiceButtonType) => void;
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
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateScore(score: number) {
    dispatch({ type: "UPDATE_SCORE", payload: score });
  }
  function updateStep(step: number) {
    dispatch({ type: "UPDATE_STEP", payload: step });
  }
  function setUserChoice(choice: choiceButtonType) {
    dispatch({ type: "SET_USER_CHOICE", payload: choice });
  }
  function replay() {
    dispatch({ type: "REPLAY" });
  }
  function reset() {
    dispatch({ type: "RESET" });
  }
  const value: IGameContext = {
    state,
    dispatch,
    updateScore,
    updateStep,
    setUserChoice,
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

export { GameProvider, useGame };
