export type choiceButtonType = "rock" | "paper" | "scissors";

export type choiceButtonPropType = {
  name: choiceButtonType;
  absulutePosition?: boolean;
  onClickAction?: (choice: choiceButtonType) => void;
  disabled?: boolean;
};

export type GameStateType = {
  score: number;
  step: number;
  userChoice: string | null;
  choices: string[];
};

export type ActionType =
  | { type: "UPDATE_SCORE"; payload: number }
  | { type: "UPDATE_STEP"; payload: number }
  | { type: "SET_USER_CHOICE"; payload: string | null }
  | { type: "REPLAY" }
  | { type: "RESET" };
