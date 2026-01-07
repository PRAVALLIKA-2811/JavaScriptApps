//multi line strings
//back tick syn
let desc = `Vignan s Lara Institute of Technology & Science (VLITS), established in 2007 in Vadlamudi, Guntur District, is a premier private engineering college in Andhra Pradesh affiliated with JNTUK. 
It offers AICTE-approved B.Tech and M.Tech programs, specializing in areas like CSE, Civil, ECE, and Mechanical. The campus is noted for its green environment, quality technical education, and strong placement preparation. `;
console.log(desc);
//string intropolation
let fName = "Uppu";
let lName = "pravallika";
console.log(`${fName} ${lName}`);
//array destructing
let p_names = ["realme", "samsung", "vivo"];
let [brand1, brand2, brand3] = p_names;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
let movieInfo = {
  movieName: "whistle",
  heroName: "thalapathi vijay",
  directorName: "atley",
};
let { movieName, heroName, directorName } = movieInfo;
console.log(movieName);
console.log(heroName);
console.log(directorName);
