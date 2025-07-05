import { addBadWord, addGoodWord, setReset } from "../store/lessonSlice";
import { type AppDispatch } from "../store/store";

/**
 * Checks if the user's answer matches the correct answer and dispatches appropriate actions
 *
 * @param myAnswer - User's input answer
 * @param correctAnswer - The correct answer to check against
 * @param dispatch - The Redux dispatch function
 * @returns {boolean} - Whether the answer was correct
 */
export const checkAnswer = (
  myAnswer: string,
  correctAnswer: string,
  dispatch: AppDispatch
): boolean => {
  if (myAnswer.trim() === "") {
    return false;
  }

  const isCorrect = myAnswer.trim() === correctAnswer.trim();

  if (isCorrect) {
    dispatch(addGoodWord(correctAnswer));
  } else {
    dispatch(addBadWord(correctAnswer));
  }

  dispatch(setReset());
  return isCorrect;
};
