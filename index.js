const { fetchMyIP, fetchCoordsByIp } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  // console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIp('24.80.197.125', (error, data) => {
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }

// console.log(`It worked! Coordinates:`, data);
});


module.exports = { fetchMyIP };