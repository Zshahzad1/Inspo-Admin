import { createSlice } from "@reduxjs/toolkit";
export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    update: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { update } = tokenSlice.actions;
export default tokenSlice.reducer;
