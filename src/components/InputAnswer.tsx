import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setMyAnswer } from "../store/lessonSlice";
import { checkAnswer } from "../utils/answerUtils";

export default function InputAnswer() {
  const dispatch = useAppDispatch();
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);
  const answer = useAppSelector((state) => state.lesson.answer);
  // Create a ref to the TextField
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on the input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handlecheckAnswer = () => {
    console.log("checkAnswer");

    checkAnswer(myAnswer, answer, dispatch);

    // Re-focus the input after answer is submitted
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handlecheckAnswer();
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label="Answer"
      variant="outlined"
      value={myAnswer}
      onChange={(e) => dispatch(setMyAnswer(e.target.value))}
      onKeyDown={handleKeyDown}
      autoFocus
      inputRef={inputRef}
      fullWidth
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90caf9",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#42a5f5",
          },
        },
        "& .MuiInputLabel-outlined": {
          fontWeight: 500,
        },
        "& .MuiInputBase-input": {
          padding: "14px 16px",
          fontSize: "1.1rem",
        },
        maxWidth: "400px",
      }}
    />
  );
}
