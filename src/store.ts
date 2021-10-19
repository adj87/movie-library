import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import moviesReducer from "./pages/Movies/redux";
import movieDetailReducer from "./pages/MovieDetail/redux";
import movieCreateReducer from "./pages/MovieCreate/redux";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
    movieCreate: movieCreateReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
