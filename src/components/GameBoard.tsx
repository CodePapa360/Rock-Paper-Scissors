function GameBoard() {
  // const [score, setScore] = useState<number>(0);
  // const [step, setStep] = useState<number>(1);
  // const [userChoice, setUserChoice] = useState<choiceButtonType | null>(null);
  // const buttons: choiceButtonType[] = ["rock", "paper", "scissors"];

  // function handleClick(choice: choiceButtonType) {
  //   setStep(1);
  //   console.log(choice);
  // }

  return (
    <div className="flex justify-center items-center">
      {/* <div>
        {step === 1 &&
          buttons.map((button: choiceButtonType) => (
            <ChoiseButton
              key={button}
              name={button}
              onClickAction={handleClick}
              disabled={false}
            />
          ))}
      </div> */}
    </div>
  );
}

export default GameBoard;
