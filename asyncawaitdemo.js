//Async Await logic
let movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      reject("Waste of time");
    }
  });
};
//how to call promise with async await
const movieResult = async () => {
  try {
    const res = await movieRating();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
movieResult();
