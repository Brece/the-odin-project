import { calculator } from "./calculator";

test('Math oprators for two numbers', () => {
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.substract(1, 3)).toBe(-2);
    expect(calculator.divide(1, 3)).toBe(1/3);
    expect(calculator.multiply(1, 3)).toBe(3);
});
