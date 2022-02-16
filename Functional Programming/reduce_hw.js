//1. Given an array of integers
const numArr = [1, 2, 3, 10, 12, 19, 22, 33, 90, 100, 125, 199];

//a. Find the sum of all odd numbers
const oddSum = (sum, num) => (num % 2 !== 0 ? (sum += num) : sum);

const getOddSum = numArr.reduce(oddSum, 0); //380

//b. Find sum of all numbers at odd indices
const sumOddIndices = (sum, num) => sum + num;

const oddNums = (num) => (numArr.indexOf(num) % 2 !== 0 ? num : null);

const getOddNums = numArr.filter(oddNums);

const getSumOfOddIndices = getOddNums.reduce(sumOddIndices, 0); //363

//c. Find the biggest number in the array
const largestNum = (accumulator, currentvalue) => (accumulator < currentvalue ? (accumulator = currentvalue) : accumulator);

const getLargestNum = numArr.reduce(largestNum, 0); //199

//d. Find the numbers divisible by 10
const divBy10 = (num) => (num % 10 === 0 ? num : null);

const getNumsDivby10 = numArr.filter(divBy10); //[10, 90, 100]

//e. Return an array where odd nums are incremented by 1, even nums are decremented by 1
const updateNum = (num) => (num % 2 === 0 ? --num : ++num);

const updatedValuesArr = numArr.map(updateNum); //[2, 1, 4, 9, 11, 20, 21, 34, 89, 99, 126, 200]

//f. return an object with sum of odd and even numbers separately
const oddEvenSumObj = (oddEvenObj, num) =>
  num % 2 === 0 ? { ...oddEvenObj, even: oddEvenObj.even + num } : { ...oddEvenObj, odd: oddEvenObj.odd + num };

const oddEvenObj = { even: 0, odd: 0 };

const getOddEvenSumObj = numArr.reduce(oddEvenSumObj, oddEvenObj); //{even: 236, odd: 380}
