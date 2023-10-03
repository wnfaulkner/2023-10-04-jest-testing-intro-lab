function isSameFirstLastCharacter(str) {
  return str.charAt(0) === str.charAt(str.length - 1);
}

console.log(isSameFirstLastCharacter('a'))
console.log(isSameFirstLastCharacter('aa'))
console.log(isSameFirstLastCharacter('ab'))

console.log(isSameFirstLastCharacter(""));

module.exports = isSameFirstLastCharacter;
