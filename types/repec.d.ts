/**
 * Extract RePEc identifiers from a string.
 * Results are normalized with "RePEc:" prefix.
 *
 * @param str - The string to search for RePEc identifiers
 * @returns An array of RePEc identifiers found in the string
 */
export function extract(str: string): string[];
