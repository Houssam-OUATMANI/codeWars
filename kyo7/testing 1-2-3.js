var number = function (array) {
    const newArray = [];
    if (array.length === 0) return array;
    return array.map((el, i) => `${i + 1}: ${el}`);
  };