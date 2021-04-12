function reverseFunction(sentence) {
  const wordsArray = sentence.split(" ")
  const reversedArray = wordsArray.reverse();
  const reverseSentence = reversedArray.join(" ")

  return reverseSentence

}

module.exports = reverseFunction;

// module.exports = reverse
// reverseFunction = (sentence) => {
//   const wordsArray = sentence.split(' ')

//   const reversedSentence = wordsArray.reverse();
//    reversedSentence = reversedArray.join(" ");
//   return reversedSentence;
// }