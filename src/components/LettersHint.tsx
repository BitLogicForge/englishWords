import { Chip } from "@mui/material";
import { useAppSelector } from "../store/hooks";

export default function LettersHint() {
  const answer = useAppSelector((state) => state.lesson.answer);
  const myAnswer = useAppSelector((state) => state.lesson.myAnswer);

  const myAnswerLetters = new Set(
    myAnswer.toLowerCase().replace(/[^a-z]/g, ""),
  );
  const uniqueLetters = new Set(answer.toLowerCase().replace(/[^a-z]/g, ""));
  const sortedLetters = Array.from(uniqueLetters).sort().join("");

  return (
    <>
      {sortedLetters.split("").map((letter, index) => (
        <Chip
          key={index}
          label={letter}
          variant="outlined"
          color={myAnswerLetters.has(letter) ? "success" : "default"}
        />
      ))}
    </>
  );
}
