# Software Testing TP1

This project contains a suite of unit tests for various services, ensuring code reliability and correctness. The testing framework used is [Vitest](https://vitest.dev/).

## Project Structure

The source code and their corresponding tests are structured as follows:

- `src/services/cartService.js` tested by `tests/cartService.test.js`
- `src/services/orderService.js` tested by `tests/orderService.test.js`
- `src/services/productService.js` tested by `tests/productService.test.js`
- `src/services/userService.js` tested by `tests/userService.test.js`

## Getting Started

First, install the project dependencies:

```bash
npm install
```

## Running Tests

To run the standard test suite, use the following command:

```bash
npm run test
```

This will execute Vitest, which by default runs in watch mode and re-runs tests on file changes.

## Test Coverage

We measure test coverage using Vitest's v8 coverage provider. To generate and view the test coverage report, run:

```bash
npm run test:coverage
```

The test suite achieves **100% code coverage** across all files. Below is a summary of the coverage report:

| File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| :------------------ | :------ | :------- | :------ | :------ | :---------------- |
| **All files**       | **100** | **100**  | **100** | **100** |                   |
| `cartService.js`    | 100     | 100      | 100     | 100     |                   |
| `orderService.js`   | 100     | 100      | 100     | 100     |                   |
| `productService.js` | 100     | 100      | 100     | 100     |                   |
| `userService.js`    | 100     | 100      | 100     | 100     |                   |

Detailed coverage results in HTML format can be found in the `coverage/index.html` file generated after running the coverage script.
