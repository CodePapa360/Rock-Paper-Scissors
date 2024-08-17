// game choices
export type GameChoiceType = "rock" | "paper" | "scissors";
export type WinnerType = "player" | "house" | "draw";

export interface IGameChoiceProps {
  name: GameChoiceType;
  absulutePosition?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
