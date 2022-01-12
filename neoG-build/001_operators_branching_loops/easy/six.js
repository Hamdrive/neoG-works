// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];
  
const check31days = month => {
if (months.includes(month)) {
    const monthnum = months.indexOf(month.toLowerCase());
    const year = new Date().getFullYear();
    const days = new Date(year, monthnum, 31);
    if (days.getDate() === 31) {
    return `${month} has 31 days`;
    } else {
    return `${month} does not have 31 days`;
    }
} else {
    return "Month does not exist";
}
};
  
console.log(check31days("August")); //August has 31 days
  