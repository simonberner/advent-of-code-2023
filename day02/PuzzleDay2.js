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

    // Solution for Part1

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

    // Solution for Part2

    getSumOfPowerOfAllGames(recordInput) {
        let powersOfAllGames = []
        recordInput.trim().split('\n').forEach(str => {
            const fewestCubes = this.getFewestPossibleNumberOfCubesOfAGame(str); // return: 6 blue, 4 red, 2 green
            const powerOfTheGame = this.calculatePowerOfAGame(fewestCubes); // returns: 48
            powersOfAllGames.push(powerOfTheGame); // eg. [48, 599, 435]
        })

        return this.addUpPowersOfAllGames(powersOfAllGames);
    }

    getFewestPossibleNumberOfCubesOfAGame(game) {
        // game: Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        // what is the fewest number of cubes of each color in the game
        const gameId = game.match(/Game \d+/)[0];
        const result = {};
        const cubesArray = game.replace(gameId + ':', '').trim().split('; '); // ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
        // iterate of the cubesArray to find the highest number of cubes of each color
        cubesArray.forEach(item => {
            let pairs = item.split(", ");
            pairs.forEach(pair => {
                let [num, color] = pair.split(" ");
                num = parseInt(num);
                // The code checks if a color is already added in the result object. If it is not or if current count (num) for that color is greater than a previously recorded value (result[color]) then it updates the result[color] with the new maximum count.
                if (!result[color] || result[color] < num) {
                    result[color] = num;
                }
            });
        });

        // remove the NaN values from the result object
        Object.keys(result).forEach(key => Number.isNaN(result[key]) && delete result[key]);
        // put the result in a string array
        return Object.entries(result).map(([color, count]) => `${count} ${color}`);
    }

    calculatePowerOfAGame(minimumSetOfCubes) {
        const numbers = [];
        minimumSetOfCubes.forEach(cube => {
            const [count, color] = cube.split(' ');
            numbers.push(parseInt(count))
        });
        // multiply the numbers array together
        return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
    }

    addUpPowersOfAllGames(powerOfAllGames) {
        return [...powerOfAllGames].reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

export {PuzzleDay2};
