import { getInput } from '../utils/index.js';

const currentModuleUrl = new URL(import.meta.url);
const textInput = getInput(currentModuleUrl);

// -------------------------- PART 1 --------------------------
const intValues = getCalibrationValues(textInput);
const answer1 = getSumOfAllValues(intValues);
console.log(`Solution #Day1-Part1: What is the sum of all of the calibration values? ${answer1}`);
// -------------------------- PART 1 --------------------------

// -------------------------- PART 2 --------------------------
// Define a mapping (enum) of spelled-out words to their numeric equivalents
const wordToNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
};
const intValuesPart2 = getCalibrationValuesPart2(textInput);
const answer2 = getSumOfAllValues(intValuesPart2);
console.log(`Solution #Day1-Part2: What is the sum of all of the calibration values? ${answer2}`);
// -------------------------- PART 2 --------------------------

// Get all the two-digit int values line by line from the input.txt
function getCalibrationValues(textInput) {
    let allIntValues = [];
    textInput.trim().split('\n').forEach(str => {
        console.log(`Part1 - rawInputString: ${str}`);
        const intString = str.match(/\d+/g).join(``); // get the string values from the text string with a regex
        console.log(`Part1 - valueString: ${intString}`)
        const firstDigit = intString.length >= 1 ? parseInt(intString.charAt(0)) : null;
        const lastDigit = intString.length >= 2 ? parseInt(intString.charAt(intString.length - 1)) : null;
        var number = 0;
        if (lastDigit !== null) {
            number = firstDigit * 10 + lastDigit; // form two-digit number
        } else {
            number = firstDigit * 10 + firstDigit; // form two-digit number with the same digit
        }
        allIntValues.push(number); // add int value to the resulting array
    });

    return allIntValues;
}

// Sum up the int values from the int array
function getSumOfAllValues(intValues) {
    console.log(`intValues array: ${intValues}`)
    return intValues.reduce(function (total, currentValue) {
        return total + currentValue
    });
    
}

function getCalibrationValuesPart2(textInput) {
    let allIntValues = [];
    // Regex to match the spelled out words to its numbers
    const wordToNumberRegEx = new RegExp(Object.keys(wordToNumber).join('|'), 'g');
    textInput.trim().split('\n').forEach(str => {
        console.log(`Part2 - rawInputString: ${str}`)
        // get the valid strings and digits out of the text (e.g. ssone5jkjtwo9 -> one5two9)
        const mixedString = str.match(/(one|two|three|four|five|six|seven|eight|nine|\d)+/g).join('');
        console.log(`Part2 - mixedString: ${mixedString}`)
        // replace the spelled out numbers with its equivalent numeric values
        const modifiedString = mixedString.replace(wordToNumberRegEx, match => wordToNumber[match]);
        console.log(`Part2 - modifiedString: ${modifiedString}`);
        const firstDigit = modifiedString.length >= 1 ? parseInt(modifiedString.charAt(0)) : null;
        const lastDigit = modifiedString.length >= 2 ? parseInt(modifiedString.charAt(modifiedString.length - 1)) : null;
        var number = 0;
        if (lastDigit !== null) {
            number = firstDigit * 10 + lastDigit; // form two-digit number
        } else {
            number = firstDigit * 10 + firstDigit; // form two-digit number with the same digit (if there is only one digit present)
        }
        console.log(`Part2 - finalNumber: ${number}`);
        allIntValues.push(number); // add int value to the resulting array
    });

    return allIntValues;
}

export { getCalibrationValues, getCalibrationValuesPart2, getSumOfAllValues };