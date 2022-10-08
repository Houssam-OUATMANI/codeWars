function pigIt(str) {
  str = str.split(" ");
  let newString = "";
  const re = /[a-zA-Z]/;
  for (const w of str) {
    if (re.test(w)) newString += w.slice(1) + w[0] + "ay ";
    else newString += w;
  }
  return newString.trimEnd();
}
