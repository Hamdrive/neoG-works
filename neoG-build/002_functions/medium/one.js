// 1. Given an array, your function should return the length of the array.

const arrayLength = (...nums) => {
  let length = 0;
  for (let i = 1; i <= nums.length; i++) {
    length++;
  }
  console.log(length);
};

arrayLength([1, 5, 3, 7, 8]);
