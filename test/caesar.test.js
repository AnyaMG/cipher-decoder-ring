const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("returns false if the shift value is equal to 0", () => {
    const input = "thinkful";
    const actual = caesar(input, 0);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("returns false if the shift value is less than -25", () => {
    const input = "thinkful";
    const actual = caesar(input, -27);
    expect(actual).to.be.false;
  });
});
describe("caesar", () => {
  it("returns false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const actual = caesar(input, 30);
    expect(actual).to.be.false;
  });
});
describe("caesar", () => {
  it("returns false if the shift value is not present", () => {
    const input = "thinkful";
    const actual = caesar(input);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("ignores capital letters", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("handles shifts that go past the end of the alphabet when encoding", () => {
    const actual = caesar("xyZzZ! !", 3);
    const expected = "abccc! !";
    expect(actual).to.eql(expected);
  });
});

describe("caesar", () => {
  it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const actual = caesar("sEcrEt   m3ssages  4re fun !!!", 3);
    const expected = "vhfuhw   p3vvdjhv  4uh ixq !!!";
    expect(actual).to.eql(expected);
  });
});

describe("caesar", () => {
    it("maintains spaces and other nonalphabetic symbols in the message before and after decoding", () => {
        const actual = caesar("vhfuhw   p3vvdjhv  4uh ixq !!!", 3, false);
        const expected = "secret   m3ssages  4re fun !!!";
        expect(actual).to.equal(expected);
    });
  });
  