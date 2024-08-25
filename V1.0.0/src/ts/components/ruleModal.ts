function ruleModal() {
  const modal = document.getElementById("rule-modal") as HTMLDivElement;
  const closeButton = document.getElementById(
    "close-button",
  ) as HTMLButtonElement;
  const ruleButton = document.getElementById(
    "rule-button",
  ) as HTMLButtonElement;

  [closeButton, ruleButton].forEach((button) => {
    button.addEventListener("click", () => modal.classList.toggle("hidden"));
  });
}

export default ruleModal;
