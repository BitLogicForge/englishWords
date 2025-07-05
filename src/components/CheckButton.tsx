import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { checkAnswer } from "../utils/answerUtils";
export default function CheckButton() {
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);
  const answer = useAppSelector((state) => state.lesson.answer);
  const dispatch = useAppDispatch();
  return (
    <Button
      variant="contained"
      onClick={() => {
        checkAnswer(myAnswer, answer, dispatch);
      }}
      sx={{ mt: 1 }}
    >
      Check
    </Button>
  );
}
