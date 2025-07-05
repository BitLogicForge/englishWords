import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  page: string;
  darkMode: boolean;
  showSettings: boolean;
}

const initialState: AppState = {
  page: "home",
  darkMode: true,
  showSettings: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    toggleSettings: (state) => {
      state.showSettings = !state.showSettings;
    },
  },
});

export const { setPage, setDarkMode, toggleSettings } = appSlice.actions;
export default appSlice.reducer;
