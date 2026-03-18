/**
 * Extract Handle identifiers from a string.
 * Format: prefix/suffix where prefix contains digits and dots.
 */

export function extract(str) {
    const matches = String(str).match(/\b[0-9.]+\/[^\s]+\b/gi);
    if (!matches) {
        return [];
    }

    return matches;
}
