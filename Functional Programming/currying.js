//Create a function which takes your name and returns a function which would add your name to anything that the function says

const giveYourName = (name) => (message) => `${name} says ${message}`;
const hamzaSays = giveYourName("Hamza");
console.log(hamzaSays("Hello World!"));

//OR

const userSays = (name) => (message) => `${name} says ${message}`;
console.log(userSays("Hamza")("Hello"));
