import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AttemptsRow from "../components/AttemptsRow";
import InputRow from "../components/InputRow";
import { getRandomWord } from "../helpers/fetchWord";
import { getWordTypeFromUri, WordType } from "../helpers/wordTypes";
import { RootState } from "../store";
import { setWord } from "../store/slices/wordSlice";

type GamePageArgs = {};
const game = ({}: GamePageArgs) => {
  const { wordLength, pattern: uriPattern } = useParams();
  const { attempts } = useSelector((state: RootState) => state.word);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pattern: WordType = getWordTypeFromUri(uriPattern);
  useEffect(() => {
    if (wordLength) {
      getRandomWord(parseInt(wordLength), pattern)
        .then((word) => {
          if (word) {
            dispatch(
              setWord({
                word,
                pattern: pattern.toString(),
              })
            );
          }
        })
        .catch((err) => {
          console.error(err);
          navigate("/");
        });
    }
  }, [wordLength]);
  return (
    <div>
      <div className="game-container">
        <div className="attempts-container">
          {attempts.map((attempt) => (
            <AttemptsRow key={attempt.attempt} attempt={attempt} />
          ))}
        </div>
        <InputRow />
      </div>
    </div>
  );
};

export default game;
