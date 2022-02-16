//WAF to tell whether a number is than 10, supply this function to Array.filter() with an array and display the final array

const numArr = [1, 2, 3, 5, 9, 10, 11, 12, 15, 20, 100];

const lessthan10 = (num) => num < 10;

const filterFn = numArr.filter(lessthan10);

///Given an array of numbers, return an array of numbers incremented by 1

const incremenenter = (num) => num + 2;

const incFn = numArr.map(incremenenter);

//Given an array of numbers, return an object for each item

const newObj = (num) => ({ num });

const newNumObj = numArr.map(newObj);
