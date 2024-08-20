function updateGameBoard(element: HTMLElement): void {
  const gameBoard = document.getElementById("game-board") as HTMLDivElement;
  gameBoard.innerHTML = "";
  gameBoard.appendChild(element);
}

export default updateGameBoard;
