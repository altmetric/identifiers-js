import { extract } from "../src/bibcode.js";

test("does extract an ADS Bibcode", () => {
    const text = "This is a Bibcode: 1974AJ.....79..819H";

    expect(extract(text)).toEqual(["1974AJ.....79..819H"]);
});

test("does extract a PhD Thesis Bibcode", () => {
    const text = "This is another Bibcode: 2004PhRvL..93o0801M";

    expect(extract(text)).toEqual(["2004PhRvL..93o0801M"]);
});

test("does extract multiple Bibcodes", () => {
    const text = "one Bibcode 1974AJ.....79..819H and another one: 2004PhRvL..93o0801M.";

    expect(extract(text)).toEqual(["1974AJ.....79..819H", "2004PhRvL..93o0801M"]);
});

test("does not extract Bibcodes from DOIs", () => {
    const text = "10.1097/01.ASW.0000443266.17665.19";

    expect(extract(text)).toEqual([]);
});
