export enum WordType {
  ALPHABET_ONLY = "^[a-zA-Z]+$",
  ALPHABET_AND_NUMBER = "^[a-zA-Z0-9]+$",
  ALPHABET_AND_SPECIAL_CHARACTER = "^[a-zA-Z0-9!@#$%^&*()_+]+$",
}

const getUriNameFromWordType = (wordType: WordType): string => {
  switch (wordType) {
    case WordType.ALPHABET_ONLY:
      return "alphabet-only";
    case WordType.ALPHABET_AND_NUMBER:
      return "alphabet-and-number";
    case WordType.ALPHABET_AND_SPECIAL_CHARACTER:
      return "alphabet-and-special-character";
    default:
      return "alphabet-only";
  }
};

const getWordTypeFromUri = (uri: string | undefined): WordType => {
  
  switch (uri) {
    case "alphabet-only":
      return WordType.ALPHABET_ONLY;
    case "alphabet-and-number":
      return WordType.ALPHABET_AND_NUMBER;
    case "alphabet-and-special-character":
      return WordType.ALPHABET_AND_SPECIAL_CHARACTER;
    default:
      return WordType.ALPHABET_ONLY;
  }
};
const getClassFromWordType = (wordType: WordType): string => {
  switch (wordType) {
    case WordType.ALPHABET_ONLY:
      return "green-bg";
    case WordType.ALPHABET_AND_NUMBER:
      return "yellow-bg";
    case WordType.ALPHABET_AND_SPECIAL_CHARACTER:
      return "red-bg";
    default:
      return "green-bg";
  }
};

export { getWordTypeFromUri, getUriNameFromWordType, getClassFromWordType };
