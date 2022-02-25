const { fetchMyIP, fetchCoordsByIp, fetchIssFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIp('24.80.197.125', (error, data) => {//Shouldn't I use fetchMyIp function to get the IP instead of writing it as a string
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }

  console.log(`It worked! Coordinates:`, data);
});

fetchIssFlyOverTimes('49.2643, -123.0961', (error, data) => {
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }

  console.log(`It worked! Time and duration`, data);
});



module.exports = {
  fetchMyIP,
  fetchCoordsByIp };