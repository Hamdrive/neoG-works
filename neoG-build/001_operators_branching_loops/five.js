// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const threecompare = (num1, num2, num3) =>
  num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);

console.log(threecompare(8, 23, 17)); //8