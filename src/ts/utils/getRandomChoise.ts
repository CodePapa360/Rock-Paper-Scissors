import { choiceButtonType } from "../types";

const choices = ["rock", "paper", "scissors"] as const;

export default function getRandomChoice(): choiceButtonType {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
