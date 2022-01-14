// 3. Given an array of numbers, your function should return an array in the ascending order.

const sortArray = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(sortArray([100,83,32,9,45,61])) //[ 9, 32, 45, 61, 83, 100 ]