// create helper function checkForDupe to account for multiple letters when passing alphabet parameter
const checkForDupe = function (str) {
  for (var i = 0; i <= str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      if (str[j] == str[i]) {
        return true;
      }
    }
  }
  return false;
};


// declare ABCs as the alphabet from which we will use if encode===true
const ABCs = "abcdefghijklmnopqrstuvwxyz";

/* create helper function to check whether all the
characters in the input are present in the alphabet parameter, otherwise
return false */
function abcAlphaEqualizer(ABCs, alphabet) {
  ABCs.split("").forEach((char) => {
    if (!alphabet.includes(char));
    return false;
  });
  return true;
}

// establish that, if alphabet parameter not passed, alphabet = ""; establish that encode is true by default
function substitution(input = "", alphabet = "", encode = true) {
  // set conditions for alphabet length being anything other than 26/lack of alphabet parameter
  if (alphabet.length !== 26 || !alphabet) return false;
  // establish condition where helper function checkForDupe must return false
  if (checkForDupe(alphabet)) return false;
  let result = "";
  // disregard casing by converting input to lowercase
  let text = input.toLowerCase();

  // begin encoding function
  if (encode) {
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!alphabet.includes(char)) result += char;
      for (let j = 0; j < ABCs.length; j++) {
        if (char === ABCs[j]) result += alphabet[j];
      }
    }
  }
  // begin decoding function
  else {
    if (abcAlphaEqualizer(ABCs, alphabet) === true) {
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!alphabet.includes(char)) result += char;
        for (let j = 0; j < ABCs.length; j++) {
          if (char === alphabet[j]) result += ABCs[j];
        }
      }
    }
  }
  return result;
}

module.exports = substitution;
