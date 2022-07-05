import { WordType } from "../../helpers/wordTypes";
import WordleButton from "../WordleButton";

const MediumPanel = () => {
  return (
    <div className="panel mt-5">
      <h3 className="text-center mb-3 red-text">
        Hard (Alphabet and numbers and special characters)
      </h3>
      <div className="gridish">
        <WordleButton
          wordLength={4}
          pattern={WordType.ALPHABET_AND_SPECIAL_CHARACTER}
        />
        <WordleButton
          wordLength={5}
          pattern={WordType.ALPHABET_AND_SPECIAL_CHARACTER}
        />
        <WordleButton
          wordLength={6}
          pattern={WordType.ALPHABET_AND_SPECIAL_CHARACTER}
        />
        <WordleButton
          wordLength={7}
          pattern={WordType.ALPHABET_AND_SPECIAL_CHARACTER}
        />
        <WordleButton
          wordLength={8}
          pattern={WordType.ALPHABET_AND_SPECIAL_CHARACTER}
        />
      </div>
    </div>
  );
};

export default MediumPanel;
