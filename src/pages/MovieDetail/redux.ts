import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieWithCompanyAndActorsAsStrings } from "../../interfaces/movie";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: null as null | MovieWithCompanyAndActorsAsStrings,
  reducers: {
    set: (state, action: PayloadAction<MovieWithCompanyAndActorsAsStrings>) =>
      action.payload
  }
});

export const { set } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
