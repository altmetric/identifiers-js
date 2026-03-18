import { extract } from "../src/nct.js";

test("extracts NCT IDs", () => {
    expect(extract("NCT00000106\nNCT00000107")).toEqual(["NCT00000106", "NCT00000107"]);
});

test("normalizes NCT IDs", () => {
    expect(extract("nct00000106\nnCt00000107")).toEqual(["NCT00000106", "NCT00000107"]);
});
