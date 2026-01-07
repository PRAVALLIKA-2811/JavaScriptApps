//apply method
const studentInfo = {
  sDetails: function (qualification, mobNo) {
    return this.sNo + " " + this.sName + " " + qualification + " " + mobNo;
  },
};
const student = {
  sNo: 23,
  sName: "pravallika",
};
console.log(studentInfo.sDetails.apply(student, ["btech", 9963247940]));
