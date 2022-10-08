function getCount(str) {
    let count = 0;
    const vowel = ["a", "o", "i", "u", "e"];
    for (const letter of str) {
      if (vowel.includes(letter)) count++;
    }
    return count;
  }