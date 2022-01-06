import { capitalize } from "./capitalize";

test('String returns capitalized', () => {
    expect(capitalize('boot')).toBe('Boot');
});
