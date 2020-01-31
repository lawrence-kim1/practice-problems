function stars(num) {
  var star = '';
  var diff = num - 1;
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= ((2 * i) - 1); j++) {
      star += '*';
    }
    for (var k = 0; k < diff; k++) {
      star += ' ';
      star = ' ' + star;
    }
    console.log(star);
    star = '';
    diff--;
  }
}
// Initial *'s, but no spaces
stars(1);
