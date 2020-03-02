// Enharmonic Equivalents
// In music, notes can be written out in multiple ways(especially for notes on the black keys).Although these notes are spelled out differently, they still are the same note physically.

//   C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent.The examples below should make this clear.

//Examples
getEquivalent("D#") //➞ "Eb"

getEquivalent("Gb") //➞ "F#"

getEquivalent("Bb") //➞"A#"
// Notes
// Note names will always be a capital letter followed by either # or b.
// Remember that the note after G is A and vice versa.

function getEquivalent(note) {
  if (note.length === 1) return;
  let enharmonic = note.charAt(0);
  let characterCode = enharmonic.charCodeAt();
  if (note.charAt(1) === 'b') {
    enharmonic = String.fromCharCode(characterCode - 1) + '#'
    if (enharmonic.charAt(0) === '@') {
      enharmonic = 'G#'
    }
  } else if (note.charAt(1) === '#') {
    enharmonic = String.fromCharCode(characterCode + 1) + 'b'
    if (enharmonic.charAt(0) === 'H') {
      enharmonic = 'Ab'
    }
  }
  return enharmonic
}

/** Pseudo Code
 * If the note just a letter, return the letter
 * Assign the first character to a new variable, enharmonic
 * Assign the character code of enharmonic to a new variable, characterCode
 * Check the second character, and see if it is a sharp or flat
 *  If the character is a flat, take enharmonic and set it to the previous letter
 *    If the original letter was A, set enharmonic to G#
 *  If the character is a sharp, take enharmonic and set it to the previous letter
 *    If the original letter was G, set enharmonic to Ab
 * Return the note, enharmonic
 */

/** Alternate Solution
 * Create an object with key value pairs for each note
 * Check the object if the input note matches one of the keys
 * Return the property assigned to that key
 */
