//this keyword in javascript
const empInfo = {
  fName: "pravallika",
  lName: "uppu",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};
console.log(empInfo.fullName());
