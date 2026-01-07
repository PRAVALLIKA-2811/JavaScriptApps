//operators in javascript
//arithmetic operators
let a = 10;
let b = 20;
console.log("addition:" + a + b);
console.log("subtraction:" + (a - b));
console.log("multiplication:" + a * b);
console.log("division:" + a / b);
console.log("modulus:" + (a % b));
//tricky point
console.log(a + b + "Hi"); //30Hi
console.log("hi" + a + b); //hi1020
console.log("20" - "10"); //10
console.log("20" * "10"); //200
console.log("20" / "2"); //10
console.log("30" / "hi"); //NaN(not a number)
console.log("20" + "2"); //202
//comparision operators
let c = 20; //literal syntax
console.log(b == c);
console.log(b === c);
let d = new Number(20); //object syntax
console.log(b == d);
console.log(b === d);
