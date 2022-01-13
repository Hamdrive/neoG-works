// 7. Write a program to take a day as an input and determine whether it is a weekday or weekend.

let week = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
const findday = day => {
  let lowerday = day.toLowerCase();
  let loc = week.indexOf(lowerday);
  if (loc === -1) {
    console.log(`${lowerday} does not exist`);
  } else if (loc === 0 || loc === 1) {
    console.log(`${lowerday} is a weekend`);
  } else {
    console.log(`${lowerday} is a weekday`);
  }
};

findday("heckday");
