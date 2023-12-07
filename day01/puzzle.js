import { getInput } from '../utils/index.js';

const currentModuleUrl = new URL(import.meta.url);
const textInput = getInput(currentModuleUrl);
const intValues = getCalibrationValues(textInput);
const answer1 = getSumOfAllValues(intValues);

console.log(`#Day1-Part1: What is the sum of all of the calibration values? ${answer1}`);

// Get all the two-digit int values line by line from the input.txt
export function getCalibrationValues(textInput) {
    let allIntValues = [];
    textInput.trim().split('\n').forEach(str => {
        console.log(`string line: ${str}`);
        const intString = str.match(/\d+/g).join(``); // get the string values from the text string with a regex
        console.log(`intString: ${intString}`)
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
export function getSumOfAllValues(intValues) {
    console.log(`intValues array: ${intValues}`)
    return intValues.reduce(function (total, currentValue) {
        return total + currentValue
    });
    
}

// module.exports = { getCalibrationValues, getSumOfAllValues };