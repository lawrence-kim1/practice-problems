// ES6: Destructuring Objects VI
// Function parameters and default values

const str = `
function shirtSize({size="big"}) {
  return size
}`

// shirtSize() // error: Cannot destructure property 'size' of 'undefined' or 'null'
//The preceding code produces an error because no object was passed to the function.

// Challenge
// Fix the function to return the default size, even if nothing is passed to the function
//   Do not remove the { size = "big" } object in the parameter
// Do not change the return statement
// Example
shirtSize() //➞ "big"
// Notes
// If you get stuck you can find the answer in one of the yellow notes on the MDN docs page.Link is in the Resources Tab
