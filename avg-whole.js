// Is the Average of All Elements a Whole Number ?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
isAvgWhole([1, 3]) //➞ true

isAvgWhole([1, 2, 3, 4]) //➞ false

isAvgWhole([1, 5, 6]) //➞ true

isAvgWhole([1, 1, 1]) //➞ true

isAvgWhole([9, 2, 2, 5]) //➞ false

function isAvgWhole(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  }
  var average = counter / arr.length;
  if (average === Math.floor(average)) {
    return true;
  }
  else {
    return false;
  }
}

// Get the numbers from the array
  // Iterate over the values of the array
  // Create a total and add the values to it
// Create an average
// Check if average is a whole number
// Return True if yes, False if no
