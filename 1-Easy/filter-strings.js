// Filter out Strings from an Array
// Create a function that takes an array of non - negative numbers and strings and return a new array without the strings.

filterArray([1, 2, "a", "b"]) //➞[1, 2]
filterArray([1, "a", "b", 0, 15]) //➞[1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) //➞[1, 2, 123]

// Zero is a non - negative number.

function filterArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/** Pseudo Code
 * Create a new array set to a blank array
 * Iterate over each value in the input arr
 *  If the value of the index is a number, add it to the array newArr
 * Return the new array, newArr
 */
