import {PuzzleDay2} from "./PuzzleDay2.js";

const exampleRecordInput = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;
const possibleGameIds = [1, 2, 5];
const puzzleDay2 = new PuzzleDay2()

// Tests for Part1
describe('getSumOfGameIds', () => {
    it('should return the sum of all the possible games IDs.', () => {
        expect(puzzleDay2.getSumOfGameIds(possibleGameIds)).toEqual(8);
    });
});

describe('getPossibleGames', () => {
    it('should return an Array of IDs of all the games which are possible.', () => {
        expect(puzzleDay2.getPossibleGames(exampleRecordInput)).toEqual(possibleGameIds);
    });
});

