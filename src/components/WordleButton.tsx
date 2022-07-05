import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getClassFromWordType,
  getUriNameFromWordType,
  WordType,
} from "../helpers/wordTypes";

type WordleButtonArgs = {
  wordLength: number;
  pattern: WordType;
};
const WordleButton = ({ wordLength, pattern }: WordleButtonArgs) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToGame = async () => {
    navigate(`/game/${getUriNameFromWordType(pattern)}/${wordLength}`);
  };
  return (
    <div>
      <div
        className={`wordle-button ${getClassFromWordType(pattern)}`}
        onClick={goToGame}
      >
        <h2>Wordle</h2>
        <p>{wordLength} Characters</p>
      </div>
    </div>
  );
};

export default WordleButton;
