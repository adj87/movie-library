import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [] },
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      // state = action.payload; // eslint-disable-line
      state.list = action.payload;
    }
  }
});

export const { set } = moviesSlice.actions;

export default moviesSlice.reducer;
