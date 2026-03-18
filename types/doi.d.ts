/**
 * Extract DOI identifiers from a string.
 * Handles complex punctuation and supports ISBN-A format.
 *
 * @param str - The string to search for DOI identifiers
 * @returns An array of normalized DOI identifiers found in the string
 */
export function extract(str: string): string[];
