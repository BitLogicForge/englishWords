import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  lang: string;
}

const initialState: UserState = {
  name: "",
  lang: "en",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setUserName, setLang } = userSlice.actions;
export default userSlice.reducer;
