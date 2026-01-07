const studentDetails = () => {
  console.log("Student Info");
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4];
    console.log(rollNo);
    setTimeout(
      (roll_num) => {
        const data = {
          name: "paravallika",
          qualification: "Btech",
        };
        console.log(
          `name is ${data.name} and qualification is ${data.qualification} 
          roll number ${roll_num}`
        );
      },
      2000,
      rollNo[1]
    );
  }, 2000);
};
studentDetails();
