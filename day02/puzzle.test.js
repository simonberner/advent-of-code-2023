import {PuzzleDay2} from "./PuzzleDay2.js";

const exampleRecordInput = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;
const testSetPossible = [ "3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"];
const testSetNotPossible = [ "8 green, 6 blue, 20 red", "5 blue, 4 red, 13 green", "5 green, 1 red"];
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

describe('isGamePossible', () => {
    it('should return true if a specific game is possible.', () => {
        expect(puzzleDay2.isGamePossible(testSetPossible)).toEqual(true);
    });
});

describe('isGamePossible', () => {
    it('should return false if a specific game is NOT possible.', () => {
        expect(puzzleDay2.isGamePossible(testSetNotPossible)).toEqual(false);
    });
});

// Tests for Part2
describe('getFewestNumberOfCubesOfAGame', () => {
    it('should return the fewest number of cubes required to play a game.', () => {
        const game = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
        const expectedFewestNoCubes = ["6 blue", "4 red", "2 green"];
        const fewestNumberOfCubes = puzzleDay2.getFewestPossibleNumberOfCubesOfAGame(game);
        expect(fewestNumberOfCubes).toEqual(expectedFewestNoCubes);
    });
});

describe('calculatePowerOfAGame', () => {
    it('should return the power of the minimum set of cubes in a game.', () => {
        const minimumSetOfCubes = ["6 blue", "4 red", "2 green"];
        const expectedPower = 48
        expect(puzzleDay2.calculatePowerOfAGame(minimumSetOfCubes)).toEqual(expectedPower);
    });
});

describe('addUpPowersOfAllGames', () => {
    it('should return the sum of the powers of all games.', () => {
        const powerOfAllGames = new Set([48, 12, 1560, 630, 36]);
        const expectedSum = 2286
        expect(puzzleDay2.addUpPowersOfAllGames(powerOfAllGames)).toEqual(expectedSum);
    });
});



