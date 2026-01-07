//callback function as anonymous function
let prices = [20000, 30000, 50000, 40000];
const newPrices = prices.map((val) => {
  return val - 5000;
});
console.log(newPrices);
//callback function with name
function sample() {
  console.log("Hi");
}
function demo(callback) {
  return callback;
}
demo(sample());
