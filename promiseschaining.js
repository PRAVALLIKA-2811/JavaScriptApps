//promises chaining (ES 6)
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket Booked, ");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Buy popcorn, ");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Get coke .");
  });
};
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log("Wanna go to movie , " + result);
  })
  .catch((err) => {
    console.log(err);
  });
