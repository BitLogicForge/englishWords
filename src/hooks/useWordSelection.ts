import { useEffect } from "react";
import words from "../data/wordsall.json";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setAnswer, setCurrentWord } from "../store/lessonSlice";
import { type WordPair } from "../types";
import { getRandomLineFromColumn } from "../utils/listFunctions";

/**
 * Custom hook for managing word selection logic
 * Automatically selects a new word when currentWord is empty
 * Avoids selecting words that have already been used
 */
export const useWordSelection = () => {
  const dispatch = useAppDispatch();
  const currentWord = useAppSelector((state) => state.lesson.currentWord);
  const allWords = useAppSelector((state) => state.lesson.allWords);

  useEffect(() => {
    if (!currentWord) {
      // Get a word that hasn't been used yet
      let newWord: WordPair | undefined;
      let attempts = 0;
      const maxAttempts = words.length; // Prevent infinite loop

      do {
        newWord = getRandomLineFromColumn(words as WordPair[]);
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

  return {
    currentWord,
    allWords,
  };
};
