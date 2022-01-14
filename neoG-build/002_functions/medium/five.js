// 5. Given a string and an index, your function should return the character present at that index in the string.

const charAt = (sentence, index) => {
  sentence = [...sentence];
  return sentence[index - 1];
};

console.log(charAt("neoGcamp", 9));
