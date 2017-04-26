/*
Write a function which takes a ROT13 (https://en.wikipedia.org/wiki/ROT13)
 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  /* First, we have to split the input string */
  return str.split('')
    /* Then, for every single character, verify whether it's alfabetical.
       If not - leave it unmodified. 
     */
    .map(function (letter) {
      var re = /[^A-Z]/g;
      if (re.test(letter)) {
        return letter;
      }
      /* ASCII codes for capital letters from A to Z are 65 - 90 */
      var code = letter.charCodeAt(0);
      if (code > 77) {
        code -= 13;
      } else {
        code += 13;
      }
      return String.fromCharCode(code);
    })
    .join('');
}

rot13("SERR PBQR PNZC");
