/**
 * Extract PubMed identifiers from a string.
 * Leading zeros are stripped from extracted IDs.
 *
 * @param str - The string to search for PubMed identifiers
 * @returns An array of PubMed identifiers found in the string
 */
export function extract(str: string): string[];
