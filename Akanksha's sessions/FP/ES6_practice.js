// 1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const incOdd = (num) => (num % 2 === 0 ? (num += 1) : num);

const createOdd = arr.map(incOdd);

// 2. Get the names in an array for only those who have a cycle.
const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

//   Your output should be: ['Tanay', 'Tanvi']

const hasCycle = (person) => person.haveCycle;

const getCycles = family.filter(hasCycle);

// 3. Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]

// using same array from Q1

const checkforEightandEven = (num) => num < 8 && num % 2 === 0;

const filteredArr = arr.filter(checkforEightandEven);

// 4. Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
// const arr = [‘eat’, ‘sleep’, ‘repeat’, ‘code’];

// Your output should be: ['repeat']

const arr = ["eat", "sleep", "repeat", "code"];

const getMoreThanFive = (chore) => chore.length > 5;

const newChores = arr.filter(getMoreThanFive);

// 5. Given an array. Write a function to get the sum of all elements which are greater than 50.
// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumGreaterThanFifty = (sum, num) => (num > 50 ? (sum += num) : sum);

const getSum = arr.reduce(sumGreaterThanFifty, 0);

// 6. Given an array. Write a function to find the product of all elements which are even.

// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const evenSum = (sum, num) => (num % 2 === 0 ? (sum *= num) : sum);

const getSum = arr.reduce(evenSum, 1);

// 7. Given an array of objects. Write a function to find the sum of ages of each person.

const arr = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

// Your output should be: 121 /*** 60+36+16+9 ***/

const sumOfAges = (sum, person) => (sum += person.age);

const getSumOfAges = arr.reduce(sumOfAges, 0);

// 8. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

const convToObj = (acc, curr, index) => ({ ...acc, [index]: curr });

//OR

const convToObj = (acc, curr, index) => {
  acc[index] = curr;
  return acc;
};

const arrToObj = arr.reduce(convToObj, {});

// 9. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]

const updateType = (plant) => ({ ...plant, type: plant.name.length > 5 ? "vegatable" : "fruit" });

const addType = arr.map(updateType);

//10. Given an array of objects.
const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

// Question:
// a. Get all the items in an array whose quantity is less than 2.
const findItems = (obj) => obj.quantity < 2;

const getItems = inventory.filter(findItems);

// b. Get the total quantity of items present in the inventory.
const total = (acc, curr) => (acc += curr.quantity);

const getTotalItems = inventory.reduce(total, 0);

// c. Find the object which contains the item whose quantity is zero.
const zeroItems = (obj) => obj.quantity === 0;
const getZeroItems = inventory.filter(zeroItems, []);
//OR
const zeroItems = (arr) => arr.find((obj) => obj.quantity === 0);
const getZeroItems = zerooItems(inventory);

//11. Given an array. Write a function to join all elements of the array with a hyphen in between them.
const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const joinColors = (acc, curr) => `${acc}-${curr}`;

const getColors = arr.reduce(joinColors);

//OR

const getColors = arr.join("-");

//12. Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// If your input is: 24345687
// Your output should be: 2-43456-87

const input = 24345687;

const addHypehens = (acc, curr, index, arr) => {
  if (curr % 2 === 0 && arr[index + 1] % 2 === 0) acc += `${curr}-`;
  else acc += curr;
  return acc;
};

const numToStr = input.toString();

const getHyphenedNum = [...numToStr].reduce(addHypehens, "");

// 13.Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())
// If your input is: "neogrammer"
// Your output should be: "NEOGRAMMER"

// If your input is: "neoG"
// Your output should be: "NEOG"

const input = "neogrammer";

const transformToUpper = (input) => input.toUpperCase();

const uppercaseInput = transformToUpper(input);

// 14. Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.
// If your input is: "neoG"
// Your output should be: "nEOg"

const input = "neoG";

const vowels = "aeiou";

const switchCases = (letter) => {
  if (vowels.includes(letter)) letter = letter.toUpperCase();
  else letter = letter.toLowerCase();
  return letter;
};

const getUpdatedCase = [...input].map(switchCases).join("");

//15. Flatten an array without using flat().
const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

// Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

const flattenArr = (acc, curr) => acc.concat(curr);

// OR

const flattenArr = (acc, curr) => [...acc, ...curr];

const getFlatArr = input.reduce(flattenArr, []);

// 16. Count the occurrences of distinct elements in the given array.
const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

// Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}

const countOccurences = (acc, curr) => {
  curr.map((letter) => {
    if (letter in acc) acc[letter]++;
    else acc[letter] = 1;
  });

  return acc;
};

const getOccurences = input.reduce(countOccurences, {});
