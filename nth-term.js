// The Nth Term of the Sequence
// Write a function containing an expression, in terms of n, for the nth term of the sequence that has the following first six terms:

//2, 6, 13, 23, 36, 52 ...and the sequence continues.

//Examples
seq(1) //➞ 2

seq(2) //➞ 6

seq(6) //➞ 52
// Notes
// The parameter n is always >= 0.

function seq(n) {
  return (3 * Math.pow(n, 2) - n + 2) / 2
}

// function seq(n) {
//   const difference = 3 * Math.pow(n, 2);
//   const value = difference - n + 2;
//   return value / 2;
// }

/** Pseudo Code
 * +4, +7, +10, +13, +16 is the pattern, starting at 2
 * Take n to the 2nd power with the Math object
 * Multiply it by 3
 * Subtract n and add 2
 * Divide the result by 2
 * Return the value
 */
