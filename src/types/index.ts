// Type definitions for the application

export interface WordPair {
  polish: string;
  english: string;
}

export type ExerciseMode = "options" | "write";

export interface ExerciseSettings {
  mode: ExerciseMode;
  showSettings: boolean;
  showWordHint: boolean;
  showLettersHint: boolean;
  numberOfOptionsWords: number;
}

export interface WordStats {
  goodWords: string[];
  badWords: string[];
  allWords: string[];
}
