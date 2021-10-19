import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieWithCompanyAndActorsAsStrings } from "../../../interfaces/movie";

const initialState = {
  loading: false,
  movie: null as null | MovieWithCompanyAndActorsAsStrings
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: initialState,
  reducers: {
    setMovie: (
      state,
      action: PayloadAction<MovieWithCompanyAndActorsAsStrings>
    ) => {
      state.movie = action.payload; // eslint-disable-line
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload; // eslint-disable-line
    }
  }
});

export const { setMovie, setLoading } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
