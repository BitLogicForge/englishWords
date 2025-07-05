import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import words from "../data/wordsall.json";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setMyAnswer, setOptionsWords } from "../store/lessonSlice";
import { checkAnswer } from "../utils/answerUtils.ts";
import { getRandomValueFromColumn } from "../utils/listFunctions.ts";

export default function OptionsWords() {
  const dispatch = useAppDispatch();

  const answer = useAppSelector((state) => state.lesson.answer);

  const options = useAppSelector((state) => state.lesson.optionsWords);
  const numberOfOptionsWords = useAppSelector(
    (state) => state.lesson.numberOfOptionsWords,
  );

  useEffect(() => {
    if (options.length === 0) {
      const newOptions = getRandomValueFromColumn(
        words,
        "english",
        numberOfOptionsWords - 1,
        [answer],
      );
      if (newOptions && answer) {
        const values = {
          words: Array.isArray(newOptions) ? newOptions : [newOptions],
          answer: answer,
        };
        dispatch(setOptionsWords(values));
      }
    }
  }, [options, answer, numberOfOptionsWords, dispatch]);

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => {
              dispatch(setMyAnswer(option));
              checkAnswer(option, answer, dispatch);
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </>
  );
}
