// 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacci = (count) => {
  let arr = [0, 1];

  for (let i = 3; i <= count; i++) {
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  console.log(...arr);
};

fibonacci(10); //0 1 1 2 3 5 8 13 21 34
