import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckButton from "../components/CheckButton.tsx";
import CurrentWord from "../components/CurrentWord.tsx";
import InputAnswer from "../components/InputAnswer.tsx";
import LettersHint from "../components/LettersHint.tsx";
import OptionsWords from "../components/OptionsWords";
import Settings from "../components/Settings.tsx";
import Word from "../components/Word.tsx";
import WordsStats from "../components/WordsStats.tsx";
import {
  useAutoAnswerCheck,
  useExerciseSettings,
  useWordSelection,
} from "../hooks";
import { toggleSettings } from "../store/appSlice.ts";
import { useAppDispatch } from "../store/hooks";
const ExercisePage = () => {
  const dispatch = useAppDispatch();

  // Use custom hooks to manage complex logic
  useWordSelection();
  useAutoAnswerCheck();
  const { mode, showSettings, showWordHint, showLettersHint } =
    useExerciseSettings();

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
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
        <Grid size={{ xs: 12 }}>
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
