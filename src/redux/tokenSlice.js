import { createSlice } from "@reduxjs/toolkit";
export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
  },
  reducers: {
    update: (state, action) => {
      state.token = action.payload.token;
    },
    remove: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { update } = tokenSlice.actions;
export const { remove } = tokenSlice.actions;

export default tokenSlice.reducer;
