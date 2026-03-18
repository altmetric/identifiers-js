/**
 * Extract National Clinical Trial (NCT) identifiers from a string.
 * Format: NCT followed by digits, normalized to uppercase.
 */

export function extract(str) {
    const matches = String(str).match(/\bNCT\d+\b/gi);
    if (!matches) {
        return [];
    }

    return matches.map(normalize);
}

function normalize(nctId) {
    return nctId.toUpperCase();
}
