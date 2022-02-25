const request = require('request');

const fetchMyIP = function(callback) {
  const url = `https://api.ipify.org?format=json`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const ip = JSON.parse(body).ip;
      return callback(null, ip);
    }
  });
};


const fetchCoordsByIp = function(ip, callback) {
  const url = `https://freegeoip.app/json/${ip}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    } else {
      const latitude = JSON.parse(body).latitude;
      const longitude = JSON.parse(body).longitude;
      callback(null, {latitude, longitude});
    }

  });
};

const fetchIssFlyOverTimes = function(coords, callback) {
  const latitude = 49.2643;
  const longitude = -123.0961;
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode}`), null);
      return;
    }
    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

const nextISSTimesForMyLocation = function(callback) {

}


//TESTS TO SEE WHAT AM I REQUESTING
/*
const latitude = 49.2643;
const longitude = -123.0961;

const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`

console.log("--------->" + url);

request(url, (error, response, body) => {
  //console.log(error); //null
  //console.log(response); //whole bunch of stuff
  console.log(body); //information I'm looking for
})
*/




module.exports = {
  fetchMyIP,
  fetchCoordsByIp,
  fetchIssFlyOverTimes,
  nextISSTimesForMyLocation
};
