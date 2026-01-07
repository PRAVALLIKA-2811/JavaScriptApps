//promises logic in javascript
const movieRating = new Promise((resolve, reject) => {
  let rating = 3;
  if (rating > 4) {
    resolve("Good Movie");
  } else {
    reject("Waste of our time");
  }
});
//call promises
movieRating
  .then((result) => {
    console.log(result);
  })
  .catch((res) => {
    console.log(res);
  });
