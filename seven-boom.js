// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7])// ➞ "Boom!"

sevenBoom([8, 6, 33, 100])// ➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86])// ➞ "Boom!"

function sevenBoom(arr) {
  var newStr = arr.join();
  var boom;
  for (var i = 0; i < newStr.length; i++) {
    if (newStr.charAt(i) === '7') {
      boom = 'Boom!';
    }
  }
  if (boom) {
    return boom;
  } else {
    return 'there is no 7 in the array';
  }
}

// Make a container for the joined numbers
// Join all the numbers together
// Set a container for boom
// Check if the joined number has a 7 in it
  // If so, add text to the container
  // If not, add nothing
// Return the container if there is text
// If there is no text, return error message
