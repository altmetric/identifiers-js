/**
 * Extract ORCID identifiers from a string.
 * Only returns valid ORCIDs that pass checksum validation.
 *
 * @param str - The string to search for ORCID identifiers
 * @returns An array of valid ORCID identifiers found in the string
 */
export function extract(str: string): string[];
