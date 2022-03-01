const square = num => num * num

const increment = num => num + 1

const reduceFns = (acc, curr) => curr(acc)

const compose = (...otherFns) => num => otherFns.reduce(reduceFns, num)

const incrementThenSquare = compose(increment, square) 

console.log(incrementThenSquare(2))