// functions addTwo(a,b) {
// same as:
// const addTwo = (a, b) => {
//   return a + b
// }

const addTwo = require("./external.js")
const subtract = require('./minus') 

const sum = addTwo(3, 4)
console.log(sum)

console.log("non of this negative stuff!")
const total = subtract(10,5)
console.log(total)

