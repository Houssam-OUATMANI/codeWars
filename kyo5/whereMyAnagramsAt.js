function anagrams(word, words) {
  const anagramsWords = [];
  const sameLength = words.filter((el) => el.length === word.length);
  const sortedWord = (w) => w.split("").sort().join("");
  for (const w of sameLength)
    if (sortedWord(word) === sortedWord(w)) anagramsWords.push(w);
  return anagramsWords;
}
