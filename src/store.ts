import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: ["Jurassic Park"],
  reducers: {
    set: (state:any[], action: PayloadAction<any>) => {
      state += action.payload; // eslint-disable-line
    },
  },
});

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
