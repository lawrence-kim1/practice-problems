// Phone Number Formatting
// Create a function that takes an array of 10 numbers(between 0 and 9) and returns a string of those numbers formatted as a phone number(e.g. (555) 555 - 5555).
// Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) //➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) //➞ "(345) 501-2527"
// Notes
// Don't forget the space after the closing parenthesis.

function formatPhoneNumber(array) {
  var newString = '';
  array.splice(0, 0, '(');
  array.splice(4, 0, ')');
  array.splice(5, 0, ' ');
  array.splice(9, 0, '-');
  for (var i = 0; i < array.length; i++) {
    newString += array[i];
  }
  return newString;
}

// Create what will be read out, a string
// Add new characters at separate spots in the array, '(', ')', ' ', '-'
// Iterate over all the characters in the array and add them to the new string
