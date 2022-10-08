function alphabetPosition(text) {
  text = text.toLowerCase();
  const alphabet = {};
  let a = 97;
  const numAlphabet = [];
  for (let i = 1; i <= 26; i++) {
    alphabet[String.fromCharCode(a)] = i;
    a++;
  }

  for (const lettre of text) {
    numAlphabet.push(alphabet[lettre]);
  }
  return numAlphabet.filter((v) => v).join(" ");
}
