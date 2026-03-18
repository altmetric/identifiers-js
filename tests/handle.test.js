import { extract } from "../src/handle.js";

test("extracts a Handle", () => {
    const text = "http://hdl.handle.net/10149/596901";

    expect(extract(text)).toEqual(["10149/596901"]);
});

test("extracts another Handle", () => {
    const text = "http://hdl.handle.net/2117/83545it.ly/1UtXnTW";

    expect(extract(text)).toEqual(["2117/83545it.ly/1UtXnTW"]);
});

test("extracts Handles separated by Unicode whitespace", () => {
    const text = "10149/596901 10251/79612";

    expect(extract(text)).toEqual(["10149/596901", "10251/79612"]);
});
