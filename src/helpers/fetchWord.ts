import axios from "axios";
import { WordType } from "./wordTypes";


const getRandomWord = async (
  wordLength: number,
  wordType: WordType
): Promise<string | null> => {
  //fetch word from localhost:5000/random-word using axios
  const response = await axios.post("http://localhost:5000/random-word", {
    word_count: 1,
    length: wordLength,
    match: wordType.toString(),
  });
  return response.data.results[0] ?? null;
};

export { getRandomWord };
