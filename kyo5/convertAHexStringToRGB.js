function hexStringToRGB(hexString) {
  hex = hexString.slice(1).split("");
  const splice = (c) => c.splice(0, 2).join("");
  const parse = (str) => parseInt(str, 16);
  const r = parse(splice(hex));
  const g = parse(splice(hex));
  const b = parse(splice(hex));

  return { r, g, b };
}
