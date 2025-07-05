import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import lessonReducer from "./lessonSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    lesson: lessonReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
