import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: {},
    rawData: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.data = action.payload;
    },
    clearCategory: (state, action) => {
      state.data = action.payload;
    },
    setRawCatData: (state, action) => {
      state.rawData = action.payload;
    },
  },
});

export const { setCategory, clearCategory, setRawCatData } =
  categorySlice.actions;

export default categorySlice.reducer;
