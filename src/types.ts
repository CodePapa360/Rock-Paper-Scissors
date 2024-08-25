export type choiceButtonType = "rock" | "paper" | "scissors";

export type choiceButtonPropType = {
  name: choiceButtonType;
  absulutePosition?: boolean;
  onClickAction?: (choice: choiceButtonType) => void;
  disabled?: boolean;
  size: "normal" | "large";
  isWinner?: boolean;
};

export type GameStateType = {
  score: number;
  isResultStep: boolean;
  userChoice: choiceButtonType | null;
  houseChoice: choiceButtonType | null;
  winner: string | null;
  choices: choiceButtonType[];
};

export type ActionType =
  | { type: "UPDATE_SCORE"; payload: number }
  | { type: "UPDATE_IS_RESULT_STEP"; payload: boolean }
  | { type: "SET_USER_CHOICE"; payload: choiceButtonType }
  | { type: "SET_HOUSE_CHOICE"; payload: choiceButtonType }
  | { type: "SET_WINNER"; payload: string }
  | { type: "REPLAY" }
  | { type: "RESET" };

export type WinnerType = "player" | "house" | "draw";
