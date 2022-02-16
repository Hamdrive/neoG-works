//2. Given an array of strings
const input = ["apple", "orange", "water", "mango", "banana"];

//a. Find the number of strings with similar number of characters
const lengthObjReducer = (lengthObj, value) => {
  if (value.length in lengthObj) lengthObj[value.length]++;
  else lengthObj[value.length] = 1;
  return lengthObj;
};

const getLengthObj = input.reduce(lengthObjReducer, {});

//b. Given an array of strings return an array of string with vowels
const words = ["gym", "apple", "lynch", "peacock"];

const vowels = ["a", "e", "i", "o", "u"];

const getWords = (word) => {
  let flag = false;
  vowels.forEach((vowel) => {
    if (word.includes(vowel)) flag = true;
  });
  if (flag) return word;
};

const vowelWords = words.filter(getWords);

//c. Return an array with key as string and value as length of string

const getStringObj = (stringObjArr, string) => {
  let obj = { [string]: string.length };
  stringObjArr.push(obj);
  return stringObjArr;
};

const stringlenObjArr = input.reduce(getStringObj, []);
