// Persistence
// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

// Return its additive persistence.
// Return its multiplicative persistence.
// Examples: Additive Persistence
additivePersistence(1679583) //➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) //➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) //➞ 0
// Because 6 is already a single-digit integer.
// Examples: Multiplicative Persistence
multiplicativePersistence(77) //➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) //➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) //➞ 0
// Because 4 is already a single-digit integer.

function additivePersistence(n) {
  var counter = 0;
  var newStr = n.toString();
  var bool = true;
  var newNum = 0;
  if (newStr.length === 1) {
    return counter;
  }
  for (var i = 0; i < newStr.length; i++) {
    var numChar = Number(newStr.charAt(i));
    newNum += numChar;
  }
  var numStr = newNum.toString();
  counter++
  if (numStr.length === 1) {
    return counter;
  } else {
    while (bool) {
      numStr = newNum.toString();
      newNum = 0;
      for (var j = 0; j < numStr.length; j++) {
        numChar = Number(numStr.charAt(j));
        newNum += numChar;
      }
      counter++
      numStr = newNum.toString();
      if (numStr.length === 1) {
        bool = false;
      }
    }
    return counter;
  }
}
// Create an empty counter
// Change the number to a string
  // Loop through until number is single digit
  // Add all the digits of n together
  // Check if the number is a single digit integer
  // If not, add 1 to counter
  // Loop will break when number is single digit
// Return counter

function multiplicativePersistence(n) {
  var counter = 0;
  var newStr = n.toString();
  var newArr = Array.from(newStr);
  var bool = true;
  if (newStr.length === 1) {
    return counter;
  }
  function multiply(array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
      sum = sum * array[i];
    }
    return sum;
  }
  var newNum = multiply(newArr);
  newStr = newNum.toString();
  counter++
  if (newStr.length === 1) {
    return counter;
  } else {
    while (bool) {
      newArr = Array.from(newStr);
      newNum = multiply(newArr);
      counter++
      newStr = newNum.toString();
      if (newStr.length === 1) {
        bool = false;
      }
    }
    return counter;
  }
}
// Set a counter to 0
// Convert n to a string
// Take each number in the string and multiply them together
// Check if number's length is 1, if not, add 1 to counter
// Return counter once number's length is 1
