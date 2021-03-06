// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Examples
arrayOfMultiples(7, 5) //➞[7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) //➞[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) //➞[17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.
function arrayOfMultiples(num, length) {
  var arr = [];
  var newNum;
  for (var i = 1; i <= length; i++) {
    newNum = num * i;
    arr.push(newNum);
  }
  return arr;
}

/** Pseudo Code
 * Create a new blank array, arr
 * Create a new number with no value assigned
 * Iterate the number of times assigned by the length parameter
 *  Assign parameter num multiplied by the count of iterations to newNum
 *  Set a new value in arr to newNum
 * Return the list of numbers, arr
*/
