const assert = require("assert");
const Emojinize = require("../index");

describe('Emojinize', () => {
  describe('.encode()', () => {
    it('it should return "👍"        when the value is ":+1:"', () => {
      assert.equal(
        Emojinize.encode(":+1:"),
        "👍"
      );
    });

    it('it should return ":god:"     when the value is ":god:"', () => {
      assert.equal(
        Emojinize.encode(":god:"),
        ":god:"
      );
    });

    it('it should return "Hello! 😄" when the value is "Hello! :smile:"', () => {
      assert.equal(
        Emojinize.encode("Hello! :smile:"),
        "Hello! 😄"
      );
    });

    it('it should return "💪💪💪"     when the value is ":muscle::muscle::muscle:"', () => {
      assert.equal(
        Emojinize.encode(":muscle::muscle::muscle:"),
        "💪💪💪"
      );
    });
  });
});
