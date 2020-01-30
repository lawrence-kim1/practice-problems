function stars(num) {
  var star = '';
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= ((2 * i) - 1); j++) {
      star = star + '*';
    }
    console.log(star);
    star = '';
  }
}
// Initial *'s, but no spaces
stars(1);

// function starsSpaceFun(num) {
//   var starSpace = '';
//   var j = 1;
//   for (var i = 1; i <= num; i++) {
//     if (j === num) {
//       starSpace = starSpace + '*';
//     } else {
//       starSpace = starSpace + ' ';
//     }
//   }
// }

// starsSpaceFun(1);

// function logArr(num) {
//   var newArr = [];
//   for (var i = 1; i <= num; i++) {
//     newArr
//   }
// }
