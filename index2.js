const { /*fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,*/ nextISSTimesForMyLocation } = require('./iss_promised');
const {printPassTimes} = require("./index");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })