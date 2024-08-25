function updateElement({
  parentEl,
  childEl,
}: {
  parentEl: HTMLElement;
  childEl: HTMLElement;
}): void {
  // adding some animation when updating the game board
  parentEl.style.opacity = "0";
  setTimeout(() => {
    parentEl.innerHTML = "";
    parentEl.appendChild(childEl);
    parentEl.style.opacity = "1";
  }, 300);
}

export default updateElement;
