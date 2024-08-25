export type choiceButtonType = "rock" | "paper" | "scissors";
export type winnerType = "player" | "house" | "draw";

export interface IchoiceButtonProps {
  name: choiceButtonType;
  absulutePosition?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
