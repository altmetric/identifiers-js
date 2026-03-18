/**
 * Scan a string for URN identifiers without normalization.
 *
 * @param str - The string to search for URN identifiers
 * @returns An array of raw URN identifiers as found in the string
 */
export function scan(str: string): string[];

/**
 * Extract and normalize URN identifiers from a string.
 *
 * @param str - The string to search for URN identifiers
 * @returns An array of normalized URN identifiers found in the string
 */
export function extract(str: string): string[];
