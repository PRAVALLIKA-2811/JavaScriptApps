//datatypes in javascript (single line comments)
var empid = 1001;
console.log(typeof empid); //number
var emobilenumber = 9555356564;
console.log(typeof emobilenumber); //nummber
var esalary = 45000.99;
console.log(typeof esalary); //number
var ename = "mahesh";
console.log(typeof ename); //string
var cemp = true;
console.log(typeof cemp); //boolean
var pf;
console.log(typeof pf); //undefined
var esi = null;
console.log(typeof esi); //object
var desg = ["developer", "HR", "manager"];
console.log(typeof desg); //object
var custinfo = {
  cid: 2001,
  cname: "pravallika",
  cadd: "vuyyandana",
};
console.log(typeof custinfo); //object
//advanced datatypes(es-6)
var tcs_trunover = BigInt(20000000000000000220000);
console.log(typeof tcs_trunover); //Bigint
var p_name = Symbol("Samsung");
var p_name1 = Symbol("Samsung");
console.log(typeof p_name); //Symbol
console.log(p_name == p_name1);
