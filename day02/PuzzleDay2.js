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
        recordInput.trim().split('\n').forEach(str => {
            console.log(`Part1 - rawRecordInput: ${str}`);

        })
        return null
    }

    getSumOfGameIds(intValues) {
        console.log(`getSumOfGameIds - intValues array: ${intValues}`)
        return intValues.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        });

    }
}

export {PuzzleDay2};