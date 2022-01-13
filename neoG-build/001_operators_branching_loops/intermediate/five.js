// 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = num => {
  let fact = 1;
  for (let i = num; i > 1; i--) {
    fact *= i;
  }
  console.log(`The factorial of ${num} is ${fact}`);
};

factorial(5); //The factorial of 5 is 120
