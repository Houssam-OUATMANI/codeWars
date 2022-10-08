function reverse(str) {
    const nString = [];
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      if ((i +1) % 2 === 0) {
        nString.push(str[i].split("").reverse().join(""));
      } else nString.push(str[i]);
    }
    return nString.join(' ').trim();
  }