const { fetchMyIP, fetchCoordsByIP, /*fetchISSFlyOverTimes,*/ nextISSTimesForMyLocation} = require('./iss');


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

// fetchISSFlyOverTimes(exampleCoords, (error, data) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! Time and duration`, data);
// });

const printPassTimes = function(passTimes) { //Array of objects
  for (const pass of passTimes) {            //Loop through the array of objects
    const datetime = new Date(0);            //0 milliseconds
    datetime.setUTCSeconds(pass.risetime);   //pass.risetime is the The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date. This transforms it to a date according to universal time.
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    //console.log(passTimes)
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