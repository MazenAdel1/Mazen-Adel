import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "counter",
  initialState: { status: false, about: true, projects: true, contact: true },
  reducers: {
    toggleStatus: (state, action: PayloadAction<boolean>) => {
      state = { ...state, status: action.payload };
      return state;
    },
    hideLink: (state, action: PayloadAction<object>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    showAllLinks: (state) => {
      state = { status: false, about: true, projects: true, contact: true };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleStatus, hideLink, showAllLinks } = menuSlice.actions;

export default menuSlice.reducer;
