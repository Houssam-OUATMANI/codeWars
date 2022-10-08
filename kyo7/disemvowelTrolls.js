function disemvowel(str) {
  const vowels = ["y", "a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((l) => !vowels.includes(l.toLowerCase()))
    .join("");
}

console.log(disemvowel("azeazsdfsdfsd"));
