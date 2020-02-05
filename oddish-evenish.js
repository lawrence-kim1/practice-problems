// Oddish vs.Evenish
// Create a function that determines whether a number is Oddish or Evenish.A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.If a number is Oddish, return "Oddish".Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
oddishOrEvenish(43) //➞ "Oddish"

oddishOrEvenish(373) //➞ "Oddish"

oddishOrEvenish(4433) //➞ "Evenish"

function oddishOrEvenish(num) {
  var str = num.toString();
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += Number(str.charAt(i));
  }
  if (sum % 2) {
    return 'Oddish'
  } else {
    return 'Evenish'
  }
}

// Change the number into a string
// Set a sum to 0
// Take each value of the string and add them to the sum
// Check if the sum is divisible by 2
  // If not, return Oddish
  // If yes, return Evenish
