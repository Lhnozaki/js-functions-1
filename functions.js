/**
 * Converts a number to a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(n) {
  let str = n.toString();
  return str;
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function increase(n) {
   let sum = n + 1;
   return sum;
 }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease(n) {
   let difference = n - 1;
   return difference;
 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 function add(x, y) {
  let sum = x + y;
  return sum;
 }

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract(x, y) {
   let difference = x - y;
   return difference;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(x, y) {
  let product = x * y;
  return product;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(x, y) {
   let quotient = x/y;
   return quotient;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(x) {
   let sqrd = x*x;
   return sqrd;
 }

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate(operation, x, y) {
   let number;
  if(operation === "add") {
    number = add(x, y);
    console.log(`${x} + ${y} = ${number}`);
    return number
  } else if(operation === "subtract") {
    number = subtract(x, y);
    console.log(`${x} - ${y} = ${number}`);
    return number;
  } else if(operation === "multiply") {
    number = multiply(x, y);
    console.log(`${x} * ${y} = ${number}`);
    return number;
  } else if(operation === "divide") {
    number = divide(x, y);
    console.log(`${x} / ${y} = ${number}`);
    return number;
  };
 }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  };
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  };
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  };
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 function minimum(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  };
 }

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  };
 }

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

