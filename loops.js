//Loops in javascript
//for loop
for (let i = 1; i <= 10; i++) {
  console.log("i=", i);
}
//while loop
let j = 1;
while (j <= 10) {
  console.log("j=", j);
  j++;
}
//do while loop
let k = 1;
do {
  console.log("k=", k);
  k++;
} while (k <= 10);
//New loops in ES6
//"for in" is one loop and "for of" is another new loop
//these loops are used to retrive data from iterables(ex:strings,arrays,and objects)
//for of
let pnames = ["Realme", "Samsung", "Vivo", "IQOO"];
for (let name of pnames) {
  console.log(name);
}
//for in
let p_names = ["Realme", "Samsung", "Vivo", "IQOO"];
for (let names in p_names) {
  console.log(p_names[names]);
}
let empInfo = {
  e_id: 1001,
  e_name: "pravallika",
  e_sal: 60000,
};
for (let info in empInfo) {
  console.log(empInfo[info]);
}
//hoe to retrirve form string
let clgName = "Vignan";
for (let c of clgName) {
  console.log(c);
}
let clg_Name = "Vignan";
for (let ch in clg_Name) {
  console.log(clg_Name[ch]);
}
