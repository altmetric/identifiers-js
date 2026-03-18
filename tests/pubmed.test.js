import { extract } from "../src/pubmed.js";

test("extracts PubMed IDs", () => {
    expect(extract(" 0123\n456\n ")).toEqual(["123", "456"]);
});

test("does not return outputs with PubMed IDs in DOIs", () => {
    const text = "10.1038/nplants.2015.3\n10.1126/science.286.5445.1679e";

    expect(extract(text)).toEqual([]);
});

test("strips leading 0s", () => {
    const text = "0000010203\n000456000";

    expect(extract(text)).toEqual(["10203", "456000"]);
});

test("does not consider 0 as a valid Pubmed ID", () => {
    expect(extract("00000000")).toEqual([]);
});

test("extracts PubMed IDs separated by Unicode whitespace", () => {
    expect(extract("123 456")).toEqual(["123", "456"]);
});
