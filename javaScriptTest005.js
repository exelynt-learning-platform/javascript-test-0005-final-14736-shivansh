/**
 * Prints a sequential number triangle pattern
 * @param {number} rows - Number of rows in the triangle
 */

function printNumberTriangle(rows) {
  if (!Number.isInteger(rows) || rows < 1) {
    console.error("Invalid input: rows must be a positive integer.");
    return;
  }

  let currentNumber = 1;

  for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
      line += currentNumber + " ";
      currentNumber++;
    }

    console.log(line.trim());
  }
}

// Example usage
printNumberTriangle(5);
