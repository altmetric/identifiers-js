import { extract } from "../src/repec.js";

test("extracts RePEc IDs", () => {
    const str = "RePEc:wbk:wbpubs:2266\nRePEc:inn:wpaper:2016-03";

    expect(extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});

test("normalizes RePec IDs", () => {
    const str = "REPEC:wbk:wbpubs:2266\nrepec:inn:wpaper:2016-03";

    expect(extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});

test("extracts RePEc IDs separated by Unicode whitespace", () => {
    const str = "RePEc:wbk:wbpubs:2266 RePEc:inn:wpaper:2016-03";

    expect(extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});
