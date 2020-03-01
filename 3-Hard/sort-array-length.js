// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples

sortByLength(["Google", "Apple", "Microsoft"])
// ➞["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
// ➞["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths,
// so you won't have to deal with multiple strings of the same length.

function sortByLength(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var strLength = arr[i].length;
    if (i === 0) {
      newArr.push(arr[i]);
    } else if (strLength > newArr[i - 1].length) {
      newArr.push(arr[i]);
    } else {
      for (var j = newArr.length - 1; j >= 0; j--) {
        if (strLength > newArr[j].length) {
          newArr.splice(j+1, 0, arr[i]);
          break;
        } else if (j === 0) {
          newArr.splice(0, 0, arr[i]);
        }
      }
    }
  }
  return newArr;
}
/** Pseudo Code
 * Create a new blank array, newArr
 * Iterate over each value in the array
 *  Set a new variable to the string's length at the index of the array being iterated
 *  Initially push the first value to the array
 *  Otherwise, check if the string's length is longer than the length of the string before it in the array
 *  If it is not longer, go through another loop
 *    Create a loop that checks from the end of newArr
 *    Check if the current string's length is longer than the length of the length of the string at each index
 *    If the current string is longer, insert it at that index
 *    Otherwise, if the beginning of the array is reached, set the string to the first value of the array
 * Return the new array, newArr
 */
