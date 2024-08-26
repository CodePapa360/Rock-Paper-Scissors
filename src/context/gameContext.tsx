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
  isResultStep: false,
  isVisibleResult: false,
  isThinking: false,
  userChoice: null,
  houseChoice: null,
  winner: null,
  choices: ["rock", "paper", "scissors"],
};

// Define the context type
interface IGameContext extends GameStateType {
  dispatch: Dispatch<ActionType>;
  updateScore: (score?: number) => void;
  updateIsResultStep: (isResultStep: boolean) => void;
  updateIsVisibleResult: (isVisibleResult: boolean) => void;
  updateIsThinking: (isThinking: boolean) => void;
  updateChoice: (choice: choiceButtonType) => void;
  replay: () => void;
  reset: () => void;
}

const GameContext = createContext<IGameContext | undefined>(undefined);

function reducer(state: GameStateType, action: ActionType) {
  switch (action.type) {
    case "UPDATE_SCORE":
      return { ...state, score: action.payload };
    case "UPDATE_IS_RESULT_STEP":
      return { ...state, isResultStep: action.payload };
    case "IS_VISIBLE_RESULT":
      return { ...state, isVisibleResult: action.payload };
    case "IS_THINKING":
      return { ...state, isThinking: action.payload };
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
  const [
    {
      score,
      isResultStep,
      userChoice,
      houseChoice,
      winner,
      choices,
      isThinking,
      isVisibleResult,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function updateScore(storageScore?: number) {
    if (storageScore) {
      dispatch({ type: "UPDATE_SCORE", payload: storageScore });
    } else {
      dispatch({ type: "UPDATE_SCORE", payload: score + 1 });
      localStorage.setItem("playerScore", String(score + 1));
    }
  }

  function updateIsResultStep(isResultStep: boolean) {
    dispatch({ type: "UPDATE_IS_RESULT_STEP", payload: isResultStep });
  }

  function updateIsVisibleResult(isVisibleResult: boolean) {
    dispatch({ type: "IS_VISIBLE_RESULT", payload: isVisibleResult });
  }

  function updateIsThinking(isThinking: boolean) {
    dispatch({ type: "IS_THINKING", payload: isThinking });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: IGameContext = {
    score,
    isResultStep,
    userChoice,
    houseChoice,
    winner,
    choices,
    isVisibleResult,
    isThinking,

    dispatch,
    updateScore,
    updateIsResultStep,
    updateIsVisibleResult,
    updateIsThinking,
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
