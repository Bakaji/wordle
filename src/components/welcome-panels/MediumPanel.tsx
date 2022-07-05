import { WordType } from "../../helpers/wordTypes";
import WordleButton from "../WordleButton";

const HardPanel = () => {
  return (
    <div className="panel mt-5">
      <h3 className="text-center mb-3 yellow-text">
        Medium (Alphabet and numbers)
      </h3>
      <div className="gridish">
        <WordleButton wordLength={4} pattern={WordType.ALPHABET_AND_NUMBER} />
        <WordleButton wordLength={5} pattern={WordType.ALPHABET_AND_NUMBER} />
        <WordleButton wordLength={6} pattern={WordType.ALPHABET_AND_NUMBER} />
        <WordleButton wordLength={7} pattern={WordType.ALPHABET_AND_NUMBER} />
        <WordleButton wordLength={8} pattern={WordType.ALPHABET_AND_NUMBER} />
      </div>
    </div>
  );
};

export default HardPanel;
