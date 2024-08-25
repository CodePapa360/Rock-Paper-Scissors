import { choiceButtonType } from "../types";

function getRandomChoise(choices: choiceButtonType[]) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export default getRandomChoise;
