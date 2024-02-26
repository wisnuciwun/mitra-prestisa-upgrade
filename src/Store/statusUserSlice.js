import { createSlice } from "@reduxjs/toolkit";

const statusUserSlice = createSlice({
  name: "statusUser",
  initialState: { data: [] },
  reducers: {
    setStatusUser: (state, action) => {
      state.data = action.payload;
    },
    removeStatusUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setStatusUser, removeStatusUser } = statusUserSlice.actions;

export default statusUserSlice.reducer;
