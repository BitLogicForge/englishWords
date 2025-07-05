/**
 * Picks a random value from a specified column/property in an array of objects
 * @param array The array of objects to pick from
 * @param column The column/property name to pick from
 * @returns A random value from the specified column or undefined if array is empty
 */
export function getRandomLineFromColumn<T>(array: T[]): T | undefined {
  if (!array || array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
/**
 * Picks a random value from a specified column/property in an array of objects
 * @param array The array of objects to pick from
 * @param column The column/property name to pick from
 * @param count Number of random values to pick (defaults to 1)
 * @param disallowedValues Optional array of values that should not be selected
 * @returns A random value or array of values from the specified column or undefined if none available
 */
export function getRandomValueFromColumn<T>(
  array: T[],
  column: keyof T,
  count: number = 1,
  disallowedValues: Array<T[keyof T]> = [],
): T[keyof T] | T[keyof T][] | undefined {
  if (!array || array.length === 0) {
    return count === 1 ? undefined : [];
  }

  // Filter out items whose column value is in the disallowed list
  const filteredArray = array.filter(
    (item) => !disallowedValues.includes(item[column]),
  );

  if (filteredArray.length === 0) {
    return count === 1 ? undefined : [];
  }

  // If requesting just one item
  if (count === 1) {
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    return filteredArray[randomIndex][column];
  }

  // For multiple items, use the shuffle approach
  const actualCount = Math.min(count, filteredArray.length);

  // Create a copy of the filtered array
  const shuffled = [...filteredArray];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the requested number of values from the column
  return shuffled.slice(0, actualCount).map((item) => item[column]);
}

/**
 * Picks multiple random unique values from a specified column/property in an array of objects
 * @param array The array of objects to pick from
 * @param column The column/property name to pick from
 * @param count Number of random values to pick (defaults to 1)
 * @returns An array of random values from the specified column
 */
export function getRandomValuesFromColumn<T>(
  array: T[],
  column: keyof T,
  count: number = 1,
): T[keyof T][] {
  if (!array || array.length === 0) {
    return [];
  }

  // Limit count to the array length
  const actualCount = Math.min(count, array.length);

  // Create a copy of the array to shuffle
  const shuffled = [...array];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Extract values from the specified column
  return shuffled.slice(0, actualCount).map((item) => item[column]);
}
