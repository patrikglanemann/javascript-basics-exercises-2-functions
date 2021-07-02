/*
function isEmptyString(string) {
  if (string === ``) {
    return true;
  }
  return false;
}
//return string === 0 also works since it already converts to falso or true

let text = isEmptyString("hello");

alert(text);

//Nr2
function IsIncluded(word1, word2) {
  let checkFirstWord = word1.includes("b");
  let checkSecondWord = word2.includes("b");
  if (checkFirstWord === true || checkSecondWord === true) {
    return true;
  }
  //return word1.includes(b); (word2 should be b)
  return false;
}
let checkForB;
alert((checkForB = IsIncluded("Bob", "Hans")));


//Nr3
function firstCharacter(string) {
  return string[0];
}
let output;
alert((output = firstCharacter("Narwale")));


//Nr4
function lastCharacter(string) {
  const strLength = string.length - 1;
  return string[strLength];
}
//short version: return string(string.length -1)

let output;
alert((output = lastCharacter("Narwale")));

*/

//Nr5
function capitalize(string) {
  const strCapital = string.toUpperCase();
  return string.replace(string[0], strCapital[0]);
}
//you could call function firstCharacter

let output;
alert((output = capitalize("narwale")));
