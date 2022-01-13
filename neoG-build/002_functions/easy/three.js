// 3.Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = (sentence) => {
  let count = 0;
  sentence = sentence.split(" ");
  if (sentence[0] !== "") {
    for (let word of sentence) {
      count++;
    }
  }
  console.log(count);
};

noOfWords("We are neoGrammers"); //3
