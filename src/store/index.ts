import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./slices/wordSlice";

export const store = configureStore({
  reducer: {
    word: wordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
