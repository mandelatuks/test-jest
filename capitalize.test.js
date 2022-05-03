

const capitalize = require('./capitalize.js');

test("Return first character of a string capitalized", () => {
    expect(capitalize('hello')).toMatch('Hello');
    expect(() => {
        capitalize("");
    }).toThrow();
    expect(() => {
        capitalize(123);
    }).toThrow();
});