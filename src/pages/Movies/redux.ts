import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [] } as {list: Movie[]},
  reducers: {
    set: (state, action: PayloadAction<Movie[]>) => {
      // state = action.payload; // eslint-disable-line
      state.list = action.payload;
    }
  }
});

export const { set } = moviesSlice.actions;

export default moviesSlice.reducer;
