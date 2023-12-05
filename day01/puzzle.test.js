import { getCalibrationValues, getSumOfAllValues } from './puzzle.js';

// Puzzle input from the Part1 example
const textInput = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

const intValues = [12, 38, 15, 77];

// Tests for Part1
describe('getCalibrationValues', () => {
    it('should return all the recovered two-digit calibration values from the lines of text in the calibration document (the input.txt)', () => {
        expect(getCalibrationValues(textInput).toEqual(intValues));
    });
});

describe('getSumOfAllValues', () => {
    it('should return the sum of all the two-digit calibration values', () => {
        expect(getSumOfAllValues(intValues).toEqual(142));
    });
});

// Tests for Part2