//WAF which can log any text with your username. ANother function which can write any text with your userID. Now create one function which can log any text with both username and userID

const logWithName = (message) => `Hamza says ${message}`;
const logWithID = (message) => `1234 : ${message}`;

const logUser = (message) => logWithID(logWithName(message));

console.log(logUser("I'm a rockstar develover"));
