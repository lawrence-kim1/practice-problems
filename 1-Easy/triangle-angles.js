// You are given 2 out of 3 angles in a triangle, in degrees.

// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees(but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

missingAngle(27, 59) // "obtuse"
missingAngle(135, 11) // "acute"
missingAngle(45, 45) // "right"


function missingAngle(angle1, angle2) {
  var angle3 = 180 - angle1 - angle2;
  if (angle3 === 90) {
    return 'right';
  } else if (angle3 > 90) {
    return 'obtuse';
  } else if (angle3 < 90) {
    return 'acute';
  }
}

/** Pseudo Code
 * Create a new angle3 that takes 180 subtracted by the two inputs, angle1 and angle2
 * If angle3 is exactly 90, return the string right
 * If angle3 is greater than 90, return the string obtuse
 * If angle3 is less than 90, return the string acute
 */
