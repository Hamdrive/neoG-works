// 1. Given a and b, your function should return the value of ab

const power = (num1, num2) => {
  let res = 1;
  for (let i = 1; i <= num2; i++) {
    res *= num1;
  }
  console.log(res);
};

power(2, 3);
