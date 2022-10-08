function spinWords(string) {
    const array = string.split(" ");
    let spin = "";
    for (const el of array)
      if (el.length >= 5) spin += el.split("").reverse().join("") + " ";
      else spin += el + " ";
    return spin.trim();
  }