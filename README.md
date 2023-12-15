# ✨🎄 Advent of Code 2023 🎄✨
The original puzzle of the year is back! This time I tried to tackle it in JavaScript.

## Website
[Advent of Code](https://adventofcode.com/)

## Solutions
In this repository you can find my solutions for the puzzles. Each day's solution is located in its own directory.

In each directory you will find:

- `README.md`: The puzzle description (Part 1&2)
- `input.txt`: My puzzle input; to use your own input text from the puzzle, you can copy/paste it in this file
- `puzzle.js`: My solution
- `puzzle.test.js`: Jest-Tests for part 1 and part 2 of the puzzle, using the example in the description

## Execution
### Production Code
- Use `npm start <day>` to get the solutions for a specifc day: e.g. `npm start 01` to get the results for the first day.
### Jest-Tests
- Terminal: Using `npm test` for running the tests does not work yet. (I have no idea why this isn't working.)
- VSCode: If you are using VSCode as IDE, install the Jest extension from Orta and run the tests with that.
- WebStorm: If you are using WebStorm as IDE, add `--experimental-vm-modules node_modules/jest/bin/jest.js jest --verbose` to the 'Node options' of the Jest-Tests run configuration and run them with that.

## Notes
### Testing with Jest
#### ECMAScript Modules
- Using ECMAScript modules in Jest is still experimental!
- Consider [the following](https://jestjs.io/docs/ecmascript-modules) when running Jest in combination with JavaScript modules.
#### Script: `test:watch`
In the context of Jest, which is a popular JavaScript testing framework, the `--watch` option is used to enable Jest's watch mode. When you run Jest with the `--watch` flag, it sets up a persistent process that watches for changes in your project files. Here's what it does:

1. **Initial Test Run:**
   - When you first run Jest with `--watch`, it performs an initial test run for your entire test suite.

2. **Watch Mode:**
   - After the initial run, Jest enters watch mode.
   - It keeps running and monitors your project files for any changes.

3. **File Changes:**
   - When you save changes to your source code or test files, Jest detects the modifications.

4. **Selective Test Execution:**
   - Jest only reruns the relevant tests affected by the changes you made. It doesn't run the entire test suite again, which can save a lot of time, especially in large projects.

5. **Interactive Options:**
   - While in watch mode, Jest provides an interactive command line interface (CLI) where you can press certain keys to trigger specific actions. For example, you can press `a` to run all tests, or `f` to run only tests that failed in the last run.

6. **Continuous Testing:**
   - The watch mode allows for a continuous testing workflow. As you make changes and save files, Jest responds by quickly re-running only the necessary tests.

This makes the development process more efficient, as developers can receive quick feedback on the impact of their changes without having to manually trigger test runs. It's a valuable feature for test-driven development (TDD) and generally for maintaining a reliable and up-to-date test suite while actively developing and changing code.