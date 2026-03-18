/**
 * Extract URN identifiers from a string.
 * Provides both scan() for raw URNs and extract() for normalized URNs.
 */

const URN_REGEX = /\burn:((?!urn:)[a-z0-9][a-z0-9-]{1,31}):((?:[a-z0-9()+,-.:=@;$_!*']|%(?:2[1-9a-f]|[3-6][0-9a-f]|7[0-9a-e]))+)/gi;

export function scan(str) {
    return findMatches(str, (matches) => matches[0]);
}

export function extract(str) {
    return findMatches(str, (matches) => normalize(matches[1], matches[2]));
}

function findMatches(str, callback) {
    str = String(str);

    let matches;
    const urns = [];
    while ((matches = URN_REGEX.exec(str)) !== null) {
        urns.push(callback(matches));
    }

    return urns;
}

function normalize(nid, nss) {
    nid = nid.toLowerCase();
    nss = nss.replace(/(%[2-9A-F][A-F])/g, (m) => m.toLowerCase());

    return "urn:" + nid + ":" + nss;
}
