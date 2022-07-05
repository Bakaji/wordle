import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Attempt = {
  attempt: string;
  correction: number[];
  isCorrect: boolean;
};

export interface WordState {
  loadedWord: string;
  attempts: Attempt[];
  pattern: string;
}

const initialWordState: WordState = {
  loadedWord: "",
  attempts: [],
  pattern: "",
};

const wordSlice = createSlice({
  name: "word",
  initialState: initialWordState,
  reducers: {
    setWord: (
      state,
      action: PayloadAction<{ word: string; pattern: string }>
    ) => {
      state = {
        ...state,
        loadedWord: action.payload.word,
        pattern: action.payload.pattern,
      };
      return state;
    },
    clearWord: (state) => {
      state = {
        ...state,
        attempts: [],
        pattern: "",
        loadedWord: "",
      };
      return state;
    },
    setAttempt: (state, action: PayloadAction<Attempt>) => {
      state = {
        ...state,
        attempts: [...state.attempts, action.payload],
      };
      return state;
    },
  },
});

export const { setWord, clearWord, setAttempt } = wordSlice.actions;

export default wordSlice.reducer;
