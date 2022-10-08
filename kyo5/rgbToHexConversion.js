const toHex = (int) => {
    if (int <= 0) return "00";
    if (int > 255) return "ff";
    const h = int.toString(16);
    return h.length > 1 ? h : "0" + h;
  };
  const rgb = (r, g, b) => (toHex(r) + toHex(g) + toHex(b)).toUpperCase()
  