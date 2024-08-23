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
  userChoice: choiceButtonType | null;
  choices: choiceButtonType[];
};

export type ActionType =
  | { type: "UPDATE_SCORE" }
  | { type: "UPDATE_STEP"; payload: number }
  | { type: "SET_USER_CHOICE"; payload: choiceButtonType | null }
  | { type: "REPLAY" }
  | { type: "RESET" };
