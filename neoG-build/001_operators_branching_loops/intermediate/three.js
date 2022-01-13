// 3. Write a program to take a number input from user and print multiplication table 12 times for that number.

const tables = num => {
  console.log(`Let's do the multiplication of ${num}`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} times ${i} is ${num * i}`);
  }
};

tables(2);
