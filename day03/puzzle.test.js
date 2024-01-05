import {PuzzleDay3} from "../day03/PuzzleDay3.js";

const puzzleDay3 = new PuzzleDay3()
const exampleEngineSchematic = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

// Tests for Part1
describe('getSumOfPartNumbers', () => {
    it('should return the sum of all the numbers in the engine schematic.', () => {
        expect(puzzleDay3.getSumOfPartNumbers(exampleEngineSchematic)).toEqual(4361);
    });
});
