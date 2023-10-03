const isSameFirstLastCharacter = require("./isSameFirstLastCharacter");

// Base Cases

/* A test case for a string that does have the same first and last 
   character and is 4+ characters long
*/
test("it should return true when the first and last character are the same", () => {
  expect(isSameFirstLastCharacter("abbbbba")).toBe(true);
});

/* A test case for a string that does NOT have the same first and last 
   character and is 4+ characters long
*/
test("it should return false when the first and last character are different", () => {
   expect(isSameFirstLastCharacter("abbbbbb")).toBe(false);
});

// Edge Cases
// A test case for a string with only 2 characters that are different
test("it should return false when both characters in a two-character string are different", () => {
   expect(isSameFirstLastCharacter("xy")).toBe(false);
});

// A test case for a string with only 2 characters that are the same
test("it should return true when both characters in a two-character string are the same", () => {
   expect(isSameFirstLastCharacter("aa")).toBe(true);
 });

// A test case for a string with only 1 character
test("it should return true when the string is only one character", () => {
   expect(isSameFirstLastCharacter("x")).toBe(true)
});

// A test case for an empty string
test("it should return false when the input is an empty string", () => {
   expect(isSameFirstLastCharacter('')).toBe(false)
});
