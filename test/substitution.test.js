const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
});
describe("substitution", () => {
  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
});
describe("substitution", () => {
  it("It returns false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
});
describe("substitution", () => {
  it("It maintains spaces in the message, before and after encoding", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });
});
describe("substitution", () => {
  it("It maintains spaces in the message, before and after decoding", () => {
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "you are an excellent spy";
    expect(actual).to.eql(expected);
  });
});
describe("substitution", () => {
  it("It ignores capital letters", () => {
    const actual = substitution("THiNKFuL", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
  });
});
describe("substitution", () => {
  it("maintains special characters before and after encoding", () => {
    const actual = substitution("abcde!3@", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "xoyqm!3@";
    expect(actual).to.eql(expected);
  });
});
describe("substitution", () => {
  it("maintains special characters before and after decoding", () => {
    const actual = substitution("xoyqm!3@", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "abcde!3@";
    expect(actual).to.eql(expected);
  });
});
    describe("substitution", () => {
      it("should be true that the alphabet contains all characters in the input, return false otherwise", () => {
      const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthd!pzibev', false);
      expect(actual).to.be.false;
    });
  });

