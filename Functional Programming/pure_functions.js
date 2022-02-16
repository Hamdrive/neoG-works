//WAF  to take a persons name and age in an object and increase age

const newAge = (person) => ({ ...person, age: person.age + 1 });

const birthday = newAge({ name: "hamza", age: 22 });

console.log(birthday)
