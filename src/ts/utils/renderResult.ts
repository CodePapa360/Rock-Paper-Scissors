function renderStep2({
  playerChoice,
  houseChoice,
  winner,
}: {
  playerChoice: string;
  houseChoice: string;
  winner: string;
}) {
  const gameBoard = document.getElementById("game-board") as HTMLElement;

  const markup = `
    <p>${playerChoice}</p>
    <p>${houseChoice}</p>
    <p>${winner}</p>
    `;

  gameBoard.innerHTML = markup;
}

export default renderStep2;
