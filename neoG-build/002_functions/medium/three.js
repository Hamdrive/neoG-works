// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

const replace = (arr, num1, num2) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num1) {
      arr[i] = num2;
    }
  }
  return arr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10)); //[ 1, 10, 3, 10, 6, 8 ]
