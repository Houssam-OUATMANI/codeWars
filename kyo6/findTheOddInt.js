function findOdd(A) {
  const dic = {};
  let value;
  A.forEach((el) => (dic[el] = dic[el] + 1 || 1));
  for (const key in dic) if (dic[key] % 2 !== 0) value = Number(key);
  return value;
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
