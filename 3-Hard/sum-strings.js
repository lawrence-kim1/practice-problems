// Find Sum of Dollar Amounts
// Take two arguments, an array with string values, and a string, total amount.
// Each string is made up of a $ sign and a number representing a dollar amount.
// Compare the sum of the dollar amounts in the array to the total amount string.
// If the sum is greater than the total amount string, return True, else return False.

getSum(['$10', '$4'], 15) //➞ False
function getSum(arr, total) {
  const amounts = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === '$') {
      arr[i] = arr[i].slice(1);
    }
    amounts.push(arr[i]);
  }
  for (let i = 0; i < amounts.length; i++) {
    if (amounts[i] == Number(amounts[i])) {
      counter += Number(amounts[i]);
    }
  }
  if (total.charAt(0) === '$') {
    total = total.slice(1);
    if (total == Number(total)) {
      total = Number(total);
    }
  }
  if (counter > total) {
    return true;
  } else {
    return false;
  }
}

// Create a new blank array, amounts
// Create a counter to store a sum
// Iterate over each string value in the original given list
  // Check if there is a $ character at each index
  // Delete the $ character
  // Add the new string to the Amounts list
// Take all the values of the list and compare them to a number value
  // If the number value and string value are the same, add number to counter
// Delete the $ character from the total amount string
// Check if number value and string value are the same
  // If they are, change the total amount to a number
// Check if the counter is greater than total
  // If greater, return True
  // Or else, return False
