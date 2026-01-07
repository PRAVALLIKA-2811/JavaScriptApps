const movieInfo = {
  title: "whistle",
  heroName: "Thalapathi Vijay",
  directorName: "Atlay",
};
//how to get data from object
console.log(movieInfo.directorName);
console.log(movieInfo["heroName"]);
//for in
for (let info in movieInfo) {
  console.log(movieInfo[info]);
}
//advanced methods
//Object.keys method:using this method we can access all the keys in the object
Object.keys(movieInfo).forEach((key) => {
  console.log(key);
});
//Object.values:used to retrive only values of the object
Object.values(movieInfo).forEach((val) => {
  console.log(val);
});
//Object.entries:used to get the key value pair of the object
Object.entries(movieInfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
for (let [keyy, vall] of Object.entries(movieInfo)) {
  console.log(keyy + " " + vall);
}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart object
const cartItems = {
  products: [
    { pId: 101, pName: "AC", price: 3000 },
    { pId: 202, pName: "Drone", price: 1290 },
  ],
  shippingAddr: {
    areaName: "vuyyandana",
    pinCode: 522410,
    street: "opposite to panchath offic",
  },
  userInfo: {
    userName: "paravallika",
    uId: 101,
  },
};
console.log(cartItems.userInfo.userName);
