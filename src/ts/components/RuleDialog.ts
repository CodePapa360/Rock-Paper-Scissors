function RuleModal() {
  const modal = document.getElementById("rule-modal") as HTMLElement;
  const closeButton = document.getElementById("close-button") as HTMLElement;
  const ruleButton = document.getElementById("rule-button") as HTMLElement;

  [closeButton, ruleButton].forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.toggle("flex");
      modal.classList.toggle("hidden");
    });
  });
}

export default RuleModal;
