/**
 * Extract arXiv identifiers from a string.
 * Supports both pre-2007 format (e.g., math.GT/0309136) and
 * post-2007 format (e.g., 0706.0001, 1501.00001v2).
 *
 * @param str - The string to search for arXiv identifiers
 * @returns An array of arXiv identifiers found in the string
 */
export function extract(str: string): string[];
