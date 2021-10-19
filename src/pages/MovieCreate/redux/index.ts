import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Actor } from "../../../interfaces/actor";
import { Company } from "../../../interfaces/company";

const initialState = {
  loading: false,
  actors: [] as [] | Actor[],
  companies: [] as [] | Company[]
};

const movieCreateSlice = createSlice({
  name: "movieCreate",
  initialState: initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload; // eslint-disable-line
    },
    setActors: (state, action: PayloadAction<Actor[]>) => {
      state.actors = action.payload; // eslint-disable-line
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload; // eslint-disable-line
    }
  }
});

export const { setCompanies, setActors, setLoading } = movieCreateSlice.actions;

export default movieCreateSlice.reducer;
