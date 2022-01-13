// 6. Write a Program to take a number input from user and find if the number is Prime or not.

const prime = num => {
  let flag = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      flag++;
    }
  }

  if (flag === 2) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }
};

prime(81);
