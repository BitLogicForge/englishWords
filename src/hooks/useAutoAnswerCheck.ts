import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addGoodWord, setReset } from "../store/lessonSlice";

/**
 * Custom hook for handling automatic answer checking
 * Automatically checks if answer matches myAnswer when both are available
 * Only triggers when showWordHint is true
 */
export const useAutoAnswerCheck = () => {
  const dispatch = useAppDispatch();
  const answer = useAppSelector((state) => state.lesson.answer);
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);
  const showWordHint = useAppSelector((state) => state.lesson.showWordHint);

  useEffect(() => {
    if (answer === myAnswer && answer !== "" && showWordHint) {
      dispatch(addGoodWord(myAnswer));
      dispatch(setReset());
    }
  }, [answer, myAnswer, showWordHint, dispatch]);

  return {
    answer,
    myAnswer,
    showWordHint,
  };
};
