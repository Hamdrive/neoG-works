
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

const {c : arrr = [2,3,4].push(5), aloo} = obj 

console.log(arr, aloo)

// OP -> 4 1