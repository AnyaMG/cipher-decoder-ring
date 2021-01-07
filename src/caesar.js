// establish default parameters of shift as zero and encode as true
function caesar(input, shift = 0, encode = true) {

  /* establish conditions where shift returns false if:
  it falls outside of -25 and 25 or equal to zero */
  if (shift < -25 || shift > 25 || shift === 0) return false;
  if (encode === false) {
    // establish condition to invert the shift value
    if (Math.sign(shift) === 1) {
      shift = -Math.abs(shift);
    } else if (Math.sign(shift) === -1) {
      shift = Math.abs(shift);
    }
  }
  // declare result as an empty string and ignore casing in output by converting input to lowercase
  let result = "";
  let lcInput = input.toLowerCase();

  for (let i = 0; i < lcInput.length; i++) {
    let char = lcInput.charCodeAt(i);
/* locate ASCII values for lowercase a (97) and z (122) &
account for maintaining characters with values outside that scope by adding them onto result */
    if (Math.sign(shift) === 1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
      } else result += lcInput[i];
      continue;
      // begin decoding function
    } else if (Math.sign(shift) === -1) {
      if (char >= 97 && char <= 122) {
        result += String.fromCharCode(((char - 122 + shift) % 26) + 122);
      } else result += lcInput[i];
    }
  }
  return result;
}

module.exports = caesar;
