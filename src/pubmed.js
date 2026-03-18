/**
 * Extract PubMed identifiers from a string.
 * Strips leading zeros from extracted IDs.
 */

export function extract(str) {
    const matches = String(str).match(/(?:^|\s)(\d+)(?=$|\s)/g);
    if (!matches) {
        return [];
    }

    return matches.map(sanitize).filter(Boolean);
}

function sanitize(pubmed) {
    return pubmed.trim().replace(/^0+/, "");
}
