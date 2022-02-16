// Take an object with mother name and sibling age, and create another object and get your age using previous object value
const rashida = { name: "farida", age: 38 };
const hamza = {...rashida, age: rashida.age - 16}

console.log(rashida == hamza)
console.log(rashida, hamza)

//Take an array with 5 colors. Create another array with 2 more colors
const ogcolors = ["violet", "indigo", "blue", "green", "yellow"];
const newcolors = [...ogcolors, "orange", "red"];

console.log(ogcolors, newcolors);
