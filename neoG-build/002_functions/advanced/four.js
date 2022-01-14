// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

const reverseCharactersOfWord = sentence => {
  let newSentence = [];
  const words = sentence.split(" ");
  for (let word of words) {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    newSentence.push(newWord);
  }
  return newSentence.join(" ");
};

console.log(reverseCharactersOfWord("we are neoGrammers")); //ew era sremmarGoen
