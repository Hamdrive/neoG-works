// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMin = (...nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) min = nums[i];
  }
  console.log(min);
};

findMin(3, 5, 9, 1); //9
