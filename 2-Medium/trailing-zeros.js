// Remove Trailing and Leading Zeros
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples
removeLeadingTrailing("230.000") //➞ "230"

removeLeadingTrailing("00402") //➞ "402"

removeLeadingTrailing("03.1400") //➞ "3.14"

removeLeadingTrailing("30") //➞ "30"
// Notes
// Return a string.
// If you get a number with .0 on the end, return the integer value(e.g.return "4" rather than "4.0").
// If the number is 0, 0.0, 000, 00.00, etc... return "0".

function removeLeadingTrailing(n) {
  let number;
  let numberStr;
  number = parseFloat(n);
  numberStr = `${number}`
  return numberStr;
}

/** Create a new variable number
 *  Create a new variable numberStr
 *  Change the input n into a number and assign it to the number variable
 *  Change the number back into a string and assign it to the numberStr variable
 * */
