//Bind method
const movieInfo = {
  movieDetails: function () {
    return this.heroName + " " + this.villanName;
  },
};
const pushpa = {
  heroName: "Allu Arjun",
  villanName: "fahadh fossil",
};
const res = movieInfo.movieDetails.bind(pushpa);
console.log(res());
