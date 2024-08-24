import { useGame } from "../context/gameContext";
import ChoiseButton from "./ChoiseButton";

function SecondStep() {
  const { userChoice, houseChoice } = useGame();

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-10">
      <div className="flex md:flex-col-reverse flex-col gap-8 place-items-center h-full">
        {userChoice && (
          <ChoiseButton name={userChoice} disabled={true} size="large" />
        )}
        <p className="uppercase text-center tracking-widest text-base md:text-2xl">
          You picked
        </p>
      </div>

      <div className="flex md:flex-col-reverse flex-col gap-8 place-items-center h-full">
        {houseChoice && (
          <ChoiseButton name={houseChoice} disabled={true} size="large" />
        )}
        <p className="uppercase text-center tracking-widest text-base md:text-2xl">
          House picked
        </p>
      </div>
    </div>
  );
}

export default SecondStep;
