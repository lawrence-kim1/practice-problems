// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
countVowels("Celebration") //➞ 5

countVowels("Palm") //➞ 1

countVowels("Prediction") //➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.

function countVowels(str) {
  let re = /aeiou/;
  let newStr = str.toLowerCase();
  return newStr.match(re);
}

// Make an empty counter
// Make a container for all the vowels
// Change the characters to all lowercase
// Iterate over each character
  // Check if the character matches one of the vowels
  // Add 1 to the counter if the character is a vowel
// Return the counter
