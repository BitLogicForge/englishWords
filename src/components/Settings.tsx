import { FormControlLabel, FormGroup, Slider } from "@mui/material";
import Switch from "@mui/material/Switch";
import { setDarkMode } from "../store/appSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setNumberOfOptionsWords,
  switchMode,
  switchShowLettersHint,
  switchShowWordHint,
} from "../store/lessonSlice";

export default function Settings() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.app.darkMode);
  const showWordHint = useAppSelector((state) => state.lesson.showWordHint);
  const mode = useAppSelector((state) => state.lesson.mode);
  const showLettersHint = useAppSelector(
    (state) => state.lesson.showLettersHint,
  );
  const numberOfOptionsWords = useAppSelector(
    (state) => state.lesson.numberOfOptionsWords,
  );
  return (
    <>
      <FormGroup>
        Settings:
        <FormControlLabel
          control={<Switch checked={darkMode} />}
          label={"Dark mode"}
          onChange={() => dispatch(setDarkMode(!darkMode))}
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={"Mode switcher: " + mode}
          onChange={() => dispatch(switchMode())}
        />
        <FormControlLabel
          control={<Switch checked={showLettersHint} />}
          label={"Show Letters Hint"}
          onChange={() => dispatch(switchShowLettersHint())}
        />
        {mode === "write" && (
          <FormControlLabel
            control={<Switch checked={showWordHint} />}
            label={"Show Word Hint"}
            onChange={() => dispatch(switchShowWordHint())}
          />
        )}
        {mode === "options" && (
          <>
            Number of options words: {numberOfOptionsWords}
            <Slider
              aria-label="numberOfOptionsWords"
              value={numberOfOptionsWords}
              onChange={(_, value) => {
                dispatch(setNumberOfOptionsWords(value as number));
              }}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={1}
              step={1}
              marks
              min={4}
              max={20}
            />
          </>
        )}
      </FormGroup>
    </>
  );
}
