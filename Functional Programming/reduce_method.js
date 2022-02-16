///Given an array of numbers, reduce it down to its sum
const numArr = [1, 2, 3, 5, 9, 10, 11, 12, 15, 20, 100];

const sumFn = (sum, value) => (sum += value);

const reducenumArr = numArr.reduce(sumFn);

///Write a reduce function using for loop
const forReducer = (arr) => {
  let sum = 0;
  for (let num = 0; num < arr.length; num++) {
    sum += arr[num];
  }
  return sum;
};

const reduceforloop = forReducer(numArr);

///Find the sum of all odd numbers in array
const numberArr = [1, 3, 5, 2, 22, 11, 9];

const getSum = (accumulator, currentvalue) => (accumulator += currentvalue);

const sumOfNumberArr = numberArr.reduce(getSum);

//Return an object of sums of odd and even numbers

const getOddEvenSum = (oddEvenObj, num) =>
  num % 2 !== 0 ? { ...oddEvenObj, oddSum: oddEvenObj.oddSum + num } : { ...oddEvenObj, evenSum: oddEvenObj.evenSum + num };

const oddEvenObj = { oddSum: 0, evenSum: 0 };

const sumsofOddEven = numberArr.reduce(getOddEvenSum, oddEvenObj);
