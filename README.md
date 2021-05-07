# Cipher decoder ring:

## Live demo:

[Cipher decoder ring NEED TO DEPLOY ](https://reservations-anyamg.vercel.app/)  

## Application Summary:

A two-way cipher encoding/decoding app for three different ciphers (Caesar, Polybius, and Substitution), as well as accompanying self-implemented test cases for each of the ciphers using Mocha and Chai. Each function takes in a string that satisfies a specific set of criteria and returns an encoded or decoded string based on the user's selection.

## Caesar Shift

![Caesar shift](https://github.com/Thinkful-Ed/project-decoder-ring/blob/master/docs/home.png?raw=true)

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

#### caesar()

The `caesar()` function in the `src/caesar.js` file has three parameters:

- _input_ is a string that refers to the inputted text to be encoded or decoded.
- _shift_ is an integer refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K"). If there is no _shift_ value, the function will return `false`.
- _encode_ is a boolean that refers to whether you should encode or decode the message. By default, it is set to `true`. Encoding is case-insensitive (e.g., both "a" or "A" would be encoded to the same result).

The following also holds true:

- If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it will wrap around to the front of the alphabet (e.g. "z" becomes "c").
- Spaces, as well as other non-alphabetic symbols, will be maintained before and after encoding or decoding.
- 
#### Examples

```js
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
```
