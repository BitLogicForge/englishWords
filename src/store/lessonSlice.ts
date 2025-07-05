import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LessonState {
  currentWord: string;
  myAnswer: string;
  answer: string;
  goodWords: string[];
  badWords: string[];
  allWords: string[];
  optionsWords: string[];
  numberOfOptionsWords: number;
  mode: "options" | "write";
  showWordHint: boolean;
  showLettersHint: boolean;
}

const initialState: LessonState = {
  currentWord: "",
  answer: "",
  myAnswer: "",
  goodWords: [],
  badWords: [],
  allWords: [],
  optionsWords: [],
  numberOfOptionsWords: 10,
  mode: "write",
  showWordHint: true,
  showLettersHint: false,
};

export const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setCurrentWord: (state, action: PayloadAction<string>) => {
      state.currentWord = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
    setMyAnswer: (state, action: PayloadAction<string>) => {
      state.myAnswer = action.payload;
    },

    setOptionsWords: (
      state,
      action: PayloadAction<{ words: string[]; answer: string }>
    ) => {
      state.optionsWords = action.payload.words;
      state.optionsWords.push(action.payload.answer);
      state.optionsWords = state.optionsWords.sort(() => Math.random() - 0.5);
    },
    addGoodWord: (state, action: PayloadAction<string>) => {
      state.goodWords.push(action.payload);
      state.allWords.push(action.payload);
    },
    addBadWord: (state, action: PayloadAction<string>) => {
      state.badWords.push(action.payload);
      state.allWords.push(action.payload);
    },
    setReset: (state) => {
      state.currentWord = "";
      state.answer = "";
      state.myAnswer = "";
      state.optionsWords = [];
    },
    switchMode: (state) => {
      state.mode = state.mode === "write" ? "options" : "write";
    },
    switchShowWordHint: (state) => {
      state.showWordHint = !state.showWordHint;
    },
    switchShowLettersHint: (state) => {
      state.showLettersHint = !state.showLettersHint;
    },
    setNumberOfOptionsWords: (state, action: PayloadAction<number>) => {
      state.numberOfOptionsWords = action.payload;
      state.optionsWords = [];
    },
  },
});

export const {
  setCurrentWord,
  setAnswer,
  setMyAnswer,
  switchMode,
  setNumberOfOptionsWords,
  setOptionsWords,
  switchShowLettersHint,
  switchShowWordHint,
  addBadWord,
  addGoodWord,
  setReset,
} = lessonSlice.actions;
export default lessonSlice.reducer;
