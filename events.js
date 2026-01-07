//event logic
function sample() {
  alert("HI");
}
let btnval = document.getElementById("btn");
btnval.addEventListener("click", sample);
function sample1() {
  alert("hello");
}
let btnval1 = document.getElementById("btn1");
btnval1.addEventListener("click", sample1);
let hval = document.getElementById("h");
const mover = () => {
  hval.style.color = "blue";
};
let mout = () => {
  hval.style.color = "";
};
hval.addEventListener("mouseover", mover);
hval.addEventListener("mouseout", mout);
let ipval = document.getElementById("ip");
let pval = document.getElementById("pg");
let iplogic = () => {
  let userVal = ipval.value;
  pval.textContent = userVal;
};
ipval.addEventListener("input", iplogic);
