//promises in jva script(ES 6)
const bubbleGame = new Promise((resolve, reject) => {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
  if (randomNum > 5) {
    resolve("High score");
  } else {
    reject("low score");
  }
});
bubbleGame
  .then((result) => {
    console.log(result);
  })
  .catch((res) => {
    console.log(res);
  });
