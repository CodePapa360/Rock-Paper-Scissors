// game choices
export type GameChoiceType = "rock" | "paper" | "scissors";

export interface IGameChoiceProps {
  name: GameChoiceType;
  absulutePosition: boolean;
  onClick?: () => void;
}
