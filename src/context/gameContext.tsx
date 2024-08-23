import { ActionType, choiceButtonType, GameStateType } from "../types";
import determineWinner from "../utils/determineWinner.ts";
import getRandomChoise from "../utils/getRandomChoise.ts";
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
  houseChoice: null,
  winner: null,
  choices: ["rock", "paper", "scissors"],
};

// Define the context type
interface IGameContext extends GameStateType {
  dispatch: Dispatch<ActionType>;
  updateScore: () => void;
  updateStep: (step: number) => void;
  setUserChoice: (choice: choiceButtonType) => void;
  replay: () => void;
  reset: () => void;
}

const GameContext = createContext<IGameContext | undefined>(undefined);

function reducer(state: GameStateType, action: ActionType) {
  switch (action.type) {
    case "UPDATE_SCORE":
      return { ...state, score: state.score + 1 };
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

  function updateScore() {
    dispatch({ type: "UPDATE_SCORE" });
  }
  function updateStep(step: number) {
    dispatch({ type: "UPDATE_STEP", payload: step });
  }
  function setUserChoice(choice: choiceButtonType) {
    dispatch({ type: "SET_USER_CHOICE", payload: choice });

    setHouseChoice();
    setWinner();
  }
  function setHouseChoice() {
    const houseChoice = getRandomChoise(choices);
    dispatch({ type: "SET_HOUSE_CHOICE", payload: houseChoice });
  }

  function setWinner() {
    if (userChoice && houseChoice) {
      const winner = determineWinner(userChoice, houseChoice);
      dispatch({ type: "SET_WINNER", payload: winner });
    }
  }

  function replay() {
    dispatch({ type: "REPLAY" });
  }
  function reset() {
    dispatch({ type: "RESET" });
  }
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

// eslint-disable-next-line react-refresh/only-export-components
export { GameProvider, useGame };
