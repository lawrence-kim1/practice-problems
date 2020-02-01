// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
doubleChar("String") //➞ "SSttrriinngg"

doubleChar("Hello World!") //➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") //➞ "11223344!!__  "
// Notes
// All test cases contain valid strings.Don't worry about spaces, special characters or numbers. They're all considered valid characters.

function doubleChar(str) {
  var newString = '';
  for (var i = 0; i < str.length; i++) {
    var strChar = str.charAt(i);
    newString += strChar;
    newString += strChar;
  }
  return newString;
}

// Create a container for the characters, an empty string
// Iterate over each character in the string
// Push twice to the array
// Convert the array back into a string
// Return the string
