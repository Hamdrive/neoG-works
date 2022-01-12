
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

// OP -> Namaste Welcome

//-----------------------------------------------------------------

const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5)} = obj 

// OP -> 4