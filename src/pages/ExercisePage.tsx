import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import CheckButton from "../components/CheckButton.tsx";
import CurrentWord from "../components/CurrentWord.tsx";
import InputAnswer from "../components/InputAnswer.tsx";
import LettersHint from "../components/LettersHint.tsx";
import OptionsWords from "../components/OptionsWords";
import Settings from "../components/Settings.tsx";
import Word from "../components/Word.tsx";
import WordsStats from "../components/WordsStats.tsx";
import words from "../data/wordsall.json";
import { toggleSettings } from "../store/appSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addGoodWord,
  setAnswer,
  setCurrentWord,
  setReset,
} from "../store/lessonSlice";
import { getRandomLineFromColumn } from "../utils/listFunctions.ts";
const ExercisePage = () => {
  const dispatch = useAppDispatch();
  const currentWord = useAppSelector((state) => state.lesson.currentWord);
  const answer = useAppSelector((state) => state.lesson.answer);
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);
  const allWords = useAppSelector((state) => state.lesson.allWords);
  const mode = useAppSelector((state) => state.lesson.mode);
  const showSettings = useAppSelector((state) => state.app.showSettings);
  const showWordHint = useAppSelector((state) => state.lesson.showWordHint);
  const showLettersHint = useAppSelector(
    (state) => state.lesson.showLettersHint
  );
  useEffect(() => {
    if (!currentWord) {
      // Get a word that hasn't been used yet
      let newWord;
      let attempts = 0;
      const maxAttempts = words.length; // Prevent infinite loop

      do {
        newWord = getRandomLineFromColumn(words);
        attempts++;
      } while (
        newWord &&
        allWords.includes(newWord.polish) &&
        attempts < maxAttempts
      );

      if (newWord) {
        dispatch(setCurrentWord(newWord.polish));
        dispatch(setAnswer(newWord.english));
      }
    }
  }, [currentWord, allWords, dispatch]);
  useEffect(() => {
    if (answer === myAnswer && answer != "" && showWordHint) {
      console.log("good");
      dispatch(addGoodWord(myAnswer));
      dispatch(setReset());
    }
  }, [answer, myAnswer, dispatch]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <CurrentWord />
          </Box>
        </Grid>
        <Grid>
          <Paper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 1,
              }}
            >
              {showSettings ? "Hide settings" : "Show settings"}
              <IconButton
                onClick={() => dispatch(toggleSettings())}
                color="primary"
                aria-label={showSettings ? "Hide settings" : "Show settings"}
              >
                {showSettings ? <CloseIcon /> : <SettingsIcon />}
              </IconButton>
            </Box>
            {showSettings && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Settings />
              </Box>
            )}
          </Paper>
        </Grid>
        {showLettersHint && (
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <LettersHint />
            </Box>
          </Grid>
        )}
        {mode === "options" && (
          <Grid size={{ xs: 12 }}>
            <OptionsWords />
          </Grid>
        )}
        {mode === "write" && showWordHint && (
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Word />
            </Box>
          </Grid>
        )}
        {mode === "write" && (
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <InputAnswer />
              <CheckButton />
            </Box>
          </Grid>
        )}
        <Grid size={{ xs: 12, sm: 6 }}>
          <WordsStats type="good" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <WordsStats type="bad" />
        </Grid>
      </Grid>
    </>
  );
};

export default ExercisePage;
