// declare const alphabet as an array of arrays
const alphabet = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "(i/j)", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];

/* create helper function countSpaces to handle ignoring spaces 
when checking if input string is even during decoding */
function countSpaces(str) {
  let spaceCt = 0;
  str.split("").forEach((char) => {
    if (char === " ") spaceCt++;
  });
  return spaceCt;
}

// establish default parameters for input "" and encode set to true
function polybius(input = "", encode = true) {
   /* establish conditions where the function will return false if:
     the input is not a string or is equal to zero */
  if (
    typeof input !== "string" ||
    input.length === 0
  )
    return false;

    /* declare result as an empty array to later utilize .join as the prompt 
    states the numerical result must still be a string data type */
  let result = []; 
  // begin encoding function; convert input to disregard casing
  let text = input.toLowerCase();
  if (encode) {
    // loop through each row in the array, then through each individual character in the row
    text.split("").forEach((char) => {
      let letterFound = false;
      for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet[i].length; j++) {
          // write condition that spaces must be maintained when encountered
          if (char === " ") {
            if (letterFound) break;
            letterFound = true;
            result.push(char);
            letterFound = true;
            // incorporate breaks going forward to stop from looping once for every row (output would be letter * 5)
            break;
          }
          // establish condition that the letters "i" or "j" must encode to 42
          if (char === "i" || char === "j") {
            if (letterFound) break;
            letterFound = true;
            result.push(42);
            break;
          }
          if (char === alphabet[i][j] && char !== "i") {
            if (letterFound) break;
            letterFound = true;
            result.push(`${j + 1}${i + 1}`);
            break;
          }
        }
      }
    });
  } else {
    // establish condition to return false if length of string to decode is odd (disregard spaces in count)
    if ((input.length - countSpaces(input)) % 2 !== 0) return false;
    // begin decoding function; set i behavior to +=2 since each "letter" is actually two characters
    for (let i = 0, l = text.length; i < l; i += 2) {
      if (text[i] === " ") {
        result.push(" ");
        i--;
        continue;
      } else {
        const row = parseInt(text.charAt(i), 10) - 1;
        const col = parseInt(text.charAt(i + 1), 10) - 1;
//push the corresponding col x row character to result array
        result.push(alphabet[col][row]);
      }
    }
  }
// convert result array into a string
  return `${result.join("")}`;
}

module.exports = polybius;
