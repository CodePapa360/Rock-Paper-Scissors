function RulePopup({ closeRule }: { closeRule: (state: boolean) => void }) {
  return (
    <aside
      className="fixed inset-0 justify-center items-center z-50 p-4 flex"
      id="rule-modal"
    >
      <span
        onClick={() => closeRule(false)}
        className="fixed inset-0 bg-black bg-opacity-50 -z-10"
      />

      <div className="bg-white rounded-md p-4 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Rules</h2>

          <button
            onClick={() => closeRule(false)}
            className="rounded-full hover:bg-slate-500/10 p-3 transition-all"
            id="close-button"
          >
            <img src="/images/icon-close.svg" alt="Close" />
          </button>
        </div>

        <img
          className="w-full h-auto object-contain"
          src="images/image-rules.svg"
          alt="Rules"
        />
      </div>
    </aside>
  );
}

export default RulePopup;
