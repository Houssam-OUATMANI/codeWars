function highAndLow(numbers) {
  numbers = numbers.split(" ").map((el) => +el);
  console.log(numbers)
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log(highAndLow("1 2 3"));
