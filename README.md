# javascript-test-0005-final-14736-shivansh
Final Project Assignment - This repository contains the complete final project code and documentation.

# Number Triangle Pattern (JavaScript)

## Overview

This JavaScript program prints a **triangle of sequential numbers**.
The numbers start from **1** and continue increasing row by row.

Each row contains a number of elements equal to the **row number**.

Example output for `rows = 5`:

```id="7x2d1k"
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

This pattern is commonly known as **Floyd’s Triangle** and is used to practice **loops and pattern logic** in programming.

---

## How the Program Works

### 1. Define Number of Rows

```javascript id="y9p8v2"
let rows = 5;
```

This variable determines how many rows will be printed.

---

### 2. Initialize Starting Number

```javascript id="h5n1r7"
let num = 1;
```

The variable `num` keeps track of the **current number to print**.

---

### 3. Outer Loop (Rows)

```javascript id="m6g4c1"
for (let i = 1; i <= rows; i++)
```

This loop controls the **rows of the triangle**.

---

### 4. Inner Loop (Numbers in Each Row)

```javascript id="b3s9t0"
for (let j = 1; j <= i; j++)
```

Each row prints `i` numbers.

For example:

| Row | Numbers Printed |
| --- | --------------- |
| 1   | 1               |
| 2   | 2 3             |
| 3   | 4 5 6           |

---

### 5. Increment the Number

```javascript id="d8k5q3"
num++;
```

After printing each number, the value increases by **1**.

---

### 6. Print the Row

```javascript id="u2w4z8"
console.log(row.trim());
```

`trim()` removes the extra space at the end of the row.

---

## Code

```javascript id="c0q2l9"
// Number Triangle Pattern

let rows = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {

  let row = "";

  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }

  console.log(row.trim());
}
```

---

## How to Run the Program

1. Install **Node.js**
2. Save the file as `numberTriangle.js`
3. Open the terminal in the project folder
4. Run the command:

```id="r4z8m1"
node numberTriangle.js
```

---

## Concepts Used

* Nested loops
* Pattern printing
* Incrementing numbers
* JavaScript console output

---

## Author

Created as a practice program to understand **loop structures and pattern printing in JavaScript**.
