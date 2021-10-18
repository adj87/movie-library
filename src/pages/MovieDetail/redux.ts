import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movies";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: null as null | Movie,
  reducers: {
    set: (state, action: PayloadAction<Movie>) => action.payload
  }
});

export const { set } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
