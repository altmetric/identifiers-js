/**
 * Extract ADS Bibcode identifiers from a string.
 * Format: 4-digit year followed by a letter and 14 alphanumeric characters.
 */

export function extract(str) {
    const matches = String(str).match(/\b\d{4}[a-z][0-9a-z&.]{14}\b/gi);
    if (!matches) {
        return [];
    }

    return matches;
}
