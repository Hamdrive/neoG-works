// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const minmax = (num1, num2) => (num1 > num2 ? `${num1} is max and ${num2} is min` : `${num2} is max and ${num1} is min`);

console.log(minmax(129, 251)); //251 is max and 129 is min
