import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movie";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [], loading: false } as {
    list: Movie[];
    loading: boolean;
  },
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      // state = action.payload; // eslint-disable-line
      state.list = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      // prettier-ignore
      state.loading = action.payload; // eslint-disable-line
    }
  }
});

export const { setMovies, setLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
