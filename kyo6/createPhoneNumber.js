/**
 *
 * @param {Array} numbers
 */
const s = (arr, count = 3) => arr.splice(0, count).join("");
function createPhoneNumber(numbers) {
 return `(${s(numbers)}) ${s(numbers)}-${s(numbers, 4)}`;
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  "(111) 111-1111"
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
