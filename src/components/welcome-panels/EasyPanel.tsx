import { WordType } from "../../helpers/wordTypes";
import WordleButton from "../WordleButton";

const EasyPanel = () => {
  return (
    <div className="panel mt-5">
      <h3 className="text-center mb-3 green-text">Easy (Alphabet only)</h3>
      <div className="gridish">
      <WordleButton wordLength={4} pattern={WordType.ALPHABET_ONLY} />
      <WordleButton wordLength={5} pattern={WordType.ALPHABET_ONLY} />
      <WordleButton wordLength={6} pattern={WordType.ALPHABET_ONLY} />
      <WordleButton wordLength={7} pattern={WordType.ALPHABET_ONLY} />
      <WordleButton wordLength={8} pattern={WordType.ALPHABET_ONLY} />
    </div>
    </div>
  );
};

export default EasyPanel;
