import {PuzzleDay2} from "./PuzzleDay2.js";

const puzzleDay2 = new PuzzleDay2();
const possibleGames = puzzleDay2.getPossibleGames(puzzleDay2.textInput)
console.log(`Solution #Day2-Part1: What is the sum of the IDs of those games? ${puzzleDay2.getSumOfGameIds(possibleGames)}`);