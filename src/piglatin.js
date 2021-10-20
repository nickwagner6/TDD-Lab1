const translate = (word) => {
  const newWord = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  //target first letter of the word
  //does the first character start with a vowel
  if (vowels.includes(newWord[0])) {
    return newWord + "way";
  } else if (vowels.includes(newWord[1])) {
    let firstLetter = newWord[0];
    const endWord = newWord.slice(1);
    return `${endWord}${firstLetter}ay`;
  } else if (vowels.includes(newWord[2])) {
    const firstTwoLetters = newWord[0] + newWord[1];
    const endWord = newWord.slice(2);
    return `${endWord}${firstTwoLetters}ay`;
  } else {
    const firstThreeLetters = newWord[0] + newWord[1] + newWord[2];
    const endWord = newWord.slice(3);
    return `${endWord}${firstThreeLetters}ay`;
  }
};

module.exports = { translate };
