import { useAppSelector } from "../store/hooks";

/**
 * Custom hook for managing exercise settings and UI state
 * Provides all the settings and UI state needed for the exercise page
 */
export const useExerciseSettings = () => {
  const mode = useAppSelector((state) => state.lesson.mode);
  const showSettings = useAppSelector((state) => state.app.showSettings);
  const showWordHint = useAppSelector((state) => state.lesson.showWordHint);
  const showLettersHint = useAppSelector(
    (state) => state.lesson.showLettersHint
  );

  return {
    mode,
    showSettings,
    showWordHint,
    showLettersHint,
  };
};
