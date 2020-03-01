// Transforming Words into Binary Strings
// Write a function that transforms all letters from[a, m] to 0 and letters from[n, z] to 1 in a string.

// Examples
convertBinary("house") //➞ "01110"

convertBinary("excLAIM") //➞ "0100000"

convertBinary("moon") //➞ "0111"
// Notes
// Conversion should be case insensitive(see example #2).

function convertBinary(str) {
  var lowerStr = str.toLowerCase();
  var placeholder = '';
  for (var i = 0; i < lowerStr.length; i++) {
    var charCode = lowerStr[i].charCodeAt();
    if (charCode >= 97 && charCode <= 109) {
      placeholder += '0';
    } else if (charCode >= 110 && charCode <= 122) {
      placeholder += '1';
    }
  }
  return placeholder;
}

// Make all letters in the string lowercase
// Create a placeholder for the new output
// Make sure to iterate over every single letter
  // Create a placeholder for the character's unicode
  // Check that a letter is within a certain range (a-m) or (n-z)
  // Add 1 or 0 to the placeholder depending on what letter is returned
// Return the placeholder
