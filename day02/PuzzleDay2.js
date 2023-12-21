import {getInput} from "../utils/index.js";

class PuzzleDay2 {
    constructor() {
        this.currentModuleUrl = new URL(import.meta.url);
        this.textInput = getInput(this.currentModuleUrl);
        this.givenCubes = new Map([
            ['red', 12],
            ['green', 13],
            ['blue', 14]
        ])
    }

    getPossibleGames(recordInput) {
        let allPossibleGameIds = [];
        // treat every single record entry (single line)
        recordInput.trim().split('\n').forEach(str => {
            console.log(`Part1 - rawRecordInput: ${str}`);
            // eg string: Game 1: 1 red, 3 blue, 11 green; 1 blue, 5 red; 3 blue, 5 green, 13 red; 6 red, 1 blue, 4 green; 16 red, 12 green
            // extract 'Game 1:' from the str
            const gameId = str.match(/Game \d+/)[0];
            // extract the Number from the gameId
            const gameIdNumber = parseInt(gameId.match(/\d+/)[0]);
            console.log(`Part1 - gameIdNumber: ${gameIdNumber}`);
            // remove 'Game 1:' from the str and split the sets with ';' into single sets and put them in an array
            const sets = str.replace(gameId + ':', '').split(';')
            if (this.isGamePossible(sets)) {
                allPossibleGameIds.push(gameIdNumber)
            }
        })
        return allPossibleGameIds;
    }

    isGamePossible(sets) {
        const setsArray = sets;
        for (const set of setsArray) {
            const cubes = set.trim().split(', ');
            for (const cube of cubes) {
                const [count, color] = cube.split(' ');
                if (!this.givenCubes.has(color) || this.givenCubes.get(color) < count) {
                    return false;
                }
            }
        }
        return true;
    }

    getSumOfGameIds(intValues) {
        console.log(`getSumOfGameIds - intValues array: ${intValues}`)
        return intValues.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        });
    }
}

export {PuzzleDay2};