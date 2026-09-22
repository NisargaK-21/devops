const { add } = require("./calculator");

describe("Add feature of the calculator", () => {

    test("Add two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("Add 2 negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });

});