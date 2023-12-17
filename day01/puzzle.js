import { getInput } from '../utils/index.js';

const currentModuleUrl = new URL(import.meta.url);
const textInput = getInput(currentModuleUrl);

// -------------------------- PART 1 --------------------------
const intValues = getCalibrationValues(textInput);
const answer1 = getSumOfAllValues(intValues);
console.log(`Solution #Day1-Part1: What is the sum of all of the calibration values? ${answer1}`);
// -------------------------- PART 1 --------------------------

// -------------------------- PART 2 --------------------------
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
    return intValues.reduce(function (accumulator, currentValue) {
        return accumulator  + currentValue
    });
    
}

function getCalibrationValuesPart2(textInput) {
    let allIntValues = [];
    textInput.trim().split('\n').forEach(str => {
        console.log(`Part2 - rawInputString: ${str}`)
        // enrich number words with its effective numbers
        const replacedString = replaceWords(str)
        console.log(`Part2 - replacedString: ${replacedString}`)
        // get the valid digits out of the text (e.g. ss15jkj29 -> 1529)
        const digitString = replacedString.match(/\d+/g).join('');
        console.log(`Part2 - digitString: ${digitString}`)
        const firstDigit = digitString.length >= 1 ? parseInt(digitString.charAt(0)) : null;
        const lastDigit = digitString.length >= 2 ? parseInt(digitString.charAt(digitString.length - 1)) : null;
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

// Add corresponding number to solve overlap condition (e.g. oneight)
function replaceWords(text) {
    let replacedString = text
    replacedString = replacedString.replaceAll("one", "o1ne");
    replacedString = replacedString.replaceAll("two", "t2wo");
    replacedString = replacedString.replaceAll("three", "t3hree");
    replacedString = replacedString.replaceAll("four", "f4our");
    replacedString = replacedString.replaceAll("five", "f5ive");
    replacedString = replacedString.replaceAll("six", "s6ix");
    replacedString = replacedString.replaceAll("seven", "s7even");
    replacedString = replacedString.replaceAll("eight", "e8ight");
    replacedString = replacedString.replaceAll("nine", "n9ine");
    return replacedString;
}

export { getCalibrationValues, getCalibrationValuesPart2, getSumOfAllValues };