import { Attempt } from "../store/slices/wordSlice";
const countOccurences = (word: string, letter: string): number => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
};

const countCorrectOccurences = (
  word: string,
  letter: string,
  comparaisonArray: number[]
): number => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && comparaisonArray[i] === 2) {
      count++;
    }
  }
  return count;
};

const checkWordle = (word: string, wordle: string): Attempt => {
  word = word.toLowerCase();
  wordle = wordle.toLowerCase();
  const correction: number[] = [];
  let correct = word[0] === wordle[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === wordle[i]) {
      correction.push(2);
    } else {
      correct = false;
      if (wordle.includes(word[i])) {
        correction.push(1);
      } else {
        correction.push(0);
      }
    }
  }
  // edit the missed occurences and set extra same letters to zero
  for (let i = 0; i < wordle.length; i++) {
    if (correction[i] === 1) {
      const letter = word[i];
      const partialAttempt = word.substring(0, i + 1);
      const occurenceInWordle = countOccurences(wordle, letter);
      const occurenceInSubstring = countOccurences(partialAttempt, letter);
      const correctOccurrence = countCorrectOccurences(
        wordle.substring(i),
        letter,
        correction.slice(i)
      );
      if (occurenceInWordle >= occurenceInSubstring + correctOccurrence) {
        correction[i] = 1;
      } else {
        correction[i] = 0;
      }
    }
  }
  return {
    attempt: word,
    correction: correction,
    isCorrect: correct,
  };
};

export { checkWordle };
