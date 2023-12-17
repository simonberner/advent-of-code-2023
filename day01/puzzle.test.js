import { getCalibrationValues, getCalibrationValuesPart2, getSumOfAllValues } from './puzzle.js';

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
    it('should return all the recovered two-digit calibration values from the lines in the input.txt', () => {
        expect(getCalibrationValues(textInput)).toEqual(intValues);
    });
});

describe('getSumOfAllValues', () => {
    it('should return the sum of all the two-digit calibration values', () => {
        expect(getSumOfAllValues(intValues)).toEqual(142);
    });
});

// Puzzle input from the Part2 example + the overlap edge case with 'oneight'
const textInputPart2 = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
mbkfgktwolbvsptgsixseven1oneightzvm
`

const intValuesPart2 = [29, 83, 13, 24, 42, 14, 76, 28];

// Tests for Part2
describe('getCalibrationValuesPart2', () => {
    it('should also consider the spelled out with letters as valid digits', () => {
        expect(getCalibrationValuesPart2(textInputPart2)).toEqual(intValuesPart2);
    });
});

describe('getSumOfAllValues', () => {
    it('should return the sum of all the "real" two-digit calibration values', () => {
        expect(getSumOfAllValues(intValuesPart2)).toEqual(309);
    });
});