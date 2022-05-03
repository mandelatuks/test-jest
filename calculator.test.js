const calculator = require('./calculator.js');
const calc = new calculator();
describe("calculator", () => {
    test('Add', () => {
        expect(calc.add(1,2)).toBe(3);
        expect(calc.add(0,2)).toBe(2);
        expect(calc.add(1,4)).toBe(5);
    });
    test('subtract', () => {
        expect(calc.subtract(1,2)).toBe(-1);
        expect(calc.subtract(0,2)).toBe(-2);
        expect(calc.subtract(6,4)).toBe(2);
    });
    test('divide', () => {
        expect(calc.divide(2,2)).toBe(1);
        expect(calc.divide(0,2)).toBe(0);
        expect(calc.divide(6,2)).toBe(3);
    });
    test('multiply', () => {
        expect(calc.multiply(1,2)).toBe(2);
        expect(calc.multiply(0,2)).toBe(0);
        expect(calc.multiply(2,4)).toBe(8);
    });
});