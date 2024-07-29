# ✨🎄 Advent of Code 2023 🎄✨
The original puzzle of the year is back! This time I try to solve the puzzles in JavaScript.

## Website
[Advent of Code](https://adventofcode.com/)

## Solutions
In this repository you can find my solutions for the puzzles. Each day's solution is located in its own directory.

In each directory you will find:

- `README.md`: The puzzle description (Part 1&2)
- `input.txt`: My personal puzzle input
- `PuzzleDay<day>.js`: My solution code (e.g. PuzzleDay2.js)
- `puzzle.js`: Code for execution (to get the solution)
- `puzzle.test.js`: Jest-Tests for part 1 and part 2 of the puzzle, using the example in the description

## Execution
### Solution Code
- Use `npm start <day>` to get the solutions for a specific day: e.g. `npm start 01` to get the results for the first day.
### Jest-Tests
- Terminal: Use `npm test <day>` to run the tests for a specific day: e.g. `npm test 01` to run the tests for the first day.
- VSCode: If you are using VSCode as IDE, you can install the Jest extension from Orta and run the tests with that.
- WebStorm: If you are using WebStorm as IDE, add `--experimental-vm-modules node_modules/jest/bin/jest.js jest --verbose` to the 'Node options' of the Jest-Tests run configuration and run them with that.

## Notes
### Driven by Tests (TDD)
I am using TDD for solving each puzzle. This means:
1. I first write one or more failing test/s
2. Then I implement the "simplest" possible solution code till the test/s passes
3. Finally I refactor the solution code (till the test/s passes again)
### Testing with Jest
#### ECMAScript Modules
- Using ECMAScript modules in Jest is still experimental!
- Consider [the following](https://jestjs.io/docs/ecmascript-modules) when running Jest in combination with JavaScript modules.
#### Script: `test:watch`
The `--watch` option is used to enable Jest's watch mode. When you run Jest with the `--watch` flag, it sets up a persistent process that watches for changes in your project files.
