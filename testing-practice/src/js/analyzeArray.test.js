import { analyzeArray } from './analyzeArray';

test('Returns array as object with properties "average, min, max, length".', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({ "average": 4, "min": 1, "max": 8, "length": 6 });

    expect(analyzeArray({ name: "Tom" })).toStrictEqual(new Error('Input value is not an array'));

    expect(analyzeArray([1, 'string', 5, 2])).toStrictEqual(new Error('Array element is not type of number.'));
});
