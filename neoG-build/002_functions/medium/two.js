// 2. Given an array and an item, your function should return the index at which the item is present.

const indexOf = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i + 1;
    }
  }
  return "Not Found";
};

console.log(indexOf([1, 6, 3, 5, 8, 9], 3)); //3
