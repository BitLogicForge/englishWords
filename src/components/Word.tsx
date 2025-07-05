import { Chip } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import {
  countMatchingFirstLetters,
  revealFirstLetters,
} from "../utils/wordFunctons.ts";
export default function Word() {
  const answer = useAppSelector((state) => state.lesson.answer);
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);
  const count = countMatchingFirstLetters(answer, myAnswer, false, false);
  const reveal = revealFirstLetters(answer, count);

  return (
    <>
      {reveal.split("").map((letter, index) => (
        <Chip
          key={index}
          label={letter}
          color={letter !== "_" ? "success" : "default"}
        />
      ))}
    </>
  );
}
