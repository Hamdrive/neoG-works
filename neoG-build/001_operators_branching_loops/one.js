// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const add3nos = (...nos) => {
    return nos.reduce((sum, num) => {
      return sum + num;
    });
  };
  
console.log(add3nos(5, 13, 7, 21, 48)); //94
  
