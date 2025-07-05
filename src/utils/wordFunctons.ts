/**
 * Reveals only the first N non-space letters of a sentence,
 * replacing all other letters with underscores.
 * Spaces are preserved and not counted towards the letter count.
 *
 * @param sentence - The original sentence
 * @param numLettersToReveal - Number of non-space letters to reveal from the beginning
 * @returns The sentence with only the first N non-space letters revealed
 */
export function revealFirstLetters(
  sentence: string,
  numLettersToReveal: number,
): string {
  let result = "";
  let revealedCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      result += " "; // Always show spaces
    } else if (revealedCount < numLettersToReveal) {
      result += sentence[i];
      revealedCount++;
    } else {
      result += "_";
    }
  }

  return result;
}
/**
 * Compares two strings and returns the count of matching first letters/characters.
 *
 * @param string1 - The first string to compare
 * @param string2 - The second string to compare
 * @param countSpaces - Whether to count spaces as characters (default: false)
 * @param caseSensitive - Whether the comparison should be case sensitive (default: true)
 * @returns The number of matching first letters/characters
 */
export function countMatchingFirstLetters(
  string1: string,
  string2: string,
  countSpaces: boolean = false,
  caseSensitive: boolean = true,
): number {
  if (!string1 || !string2) return 0;

  let count = 0;
  let pos1 = 0;
  let pos2 = 0;

  while (pos1 < string1.length && pos2 < string2.length) {
    let char1 = string1[pos1];
    let char2 = string2[pos2];

    // Skip spaces if countSpaces is false
    if (!countSpaces && char1 === " ") {
      pos1++;
      continue;
    }

    if (!countSpaces && char2 === " ") {
      pos2++;
      continue;
    }

    // Make case insensitive comparison if needed
    if (!caseSensitive) {
      char1 = char1.toLowerCase();
      char2 = char2.toLowerCase();
    }

    // Break on first mismatch
    if (char1 !== char2) {
      break;
    }

    count++;
    pos1++;
    pos2++;
  }

  return count;
}
