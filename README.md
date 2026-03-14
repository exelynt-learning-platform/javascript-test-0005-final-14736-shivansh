# Number Triangle Pattern in JavaScript

This project demonstrates how to generate a **Number Triangle Pattern** using JavaScript.

The program prints numbers in a triangular structure where each row contains **sequential numbers**, continuing from the previous row.

This is a common **logic-building problem used in coding assessments and technical interviews**.

---

## 📌 Problem Statement

Write a program that prints a **Number Triangle Pattern** for a given number of rows.

Example when `rows = 5`:

```text
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

---

## 🧠 Logic Used

1. The triangle consists of **N rows**.
2. Each row prints numbers equal to the **row number**.
3. A variable `currentNumber` keeps track of the **next number to print**.
4. After printing a number, the value is incremented.
5. The sequence continues until all rows are printed.

Formula concept:

* Row 1 → 1 number
* Row 2 → 2 numbers
* Row 3 → 3 numbers
* Row N → N numbers

---

## 💻 Implementation

```javascript
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
```

---

## ⚙️ How to Run

1. Install **Node.js** on your system.
2. Save the code in a file called:

```text
numberTriangle.js
```

3. Run the program using:

```bash
node numberTriangle.js
```

---

## 📂 Project Structure

```text
number-triangle-pattern
│
├── numberTriangle.js
└── README.md
```

---

## 🚀 Features

* Clean and readable JavaScript implementation
* Input validation for safe execution
* Reusable function design
* Simple and efficient pattern logic

---

## 📚 Concepts Covered

* JavaScript Loops
* Nested Loops
* Pattern Printing Algorithms
* Sequential Number Logic

---

## 👨‍💻 Author

**Shivansh Dubey**

B.Tech CSE


Technologies:
Java • JavaScript • React • MySQL
