/**
 * Extract RePEc identifiers from a string.
 * Normalizes to "RePEc:" prefix.
 */

export function extract(str) {
    const matches = String(str).match(/\brepec:[^\s]+\b/gi);
    if (!matches) {
        return [];
    }

    return matches.map(normalize);
}

function normalize(repec) {
    const tail = repec.substring("repec:".length);
    return "RePEc:" + tail;
}
