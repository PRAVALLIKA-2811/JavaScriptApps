//functions in Javascript
function showMessage() {
  console.log("Hi");
}
showMessage();
//function with parameters
function sumOfNumbers(a, b) {
  console.log(a + b);
}
sumOfNumbers(10, 20);
//return a value from function
function mulOfNumbers(a, b) {
  return a * b;
}
let i = mulOfNumbers(10, 20);
console.log(i);
//ES6 new functions
//Arrow function
const arrowDemo = () => {
  console.log("Arrow function demo");
};
arrowDemo();
//arrow function with parameters
const addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(10, 20);
//In a simple way
const addNums1 = (a, b) => a + b;
console.log(addNums1(10, 20));
//with return
const mulNumbers = (a, b) => {
  return a * b;
};
let j = mulNumbers(10, 20);
console.log(j);
const mulNums = (a, b) => {
  console.log(a * b);
};
mulNums(10, 20);
//Rest parameter
const param = (a, b, ...c) => {
  console.log("a=", a);
  console.log("b=", b);
  console.log("rest parameter=", ...c);
};
param(10, 20, 30, 40, 50, 60);
//default parameters
const sumNums = (a, b = 20) => {
  console.log(a + b);
};
sumNums(10);
