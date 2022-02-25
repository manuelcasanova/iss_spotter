const { fetchMyIP, fetchCoordsByIP, fetchIssFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });



// fetchCoordsByIP('24.80.197.125', (error, data) => {//Shouldn't I use fetchMyIp function to get the IP instead of writing it as a string
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! Coordinates:`, data);
// });

// const exampleCoords = { latitude: "49.2643", longitude: "-123.0961"};

// fetchIssFlyOverTimes(exampleCoords, (error, data) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! Time and duration`, data);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});




module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  printPassTimes
};