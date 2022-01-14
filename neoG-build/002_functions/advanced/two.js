// 2. Given a sentence, return a sentence with first letter of all words as capital.

const toCapitalize = sentence => {
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i].charCodeAt(0);
    let last = arr[i].slice(1);
    let newWord = String.fromCharCode(first - 32);
    arr[i] = `${newWord}${last}`;
  }
  return arr.join(" ");
};

console.log(toCapitalize("we are neoGrammers"));
