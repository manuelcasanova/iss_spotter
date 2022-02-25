const request = require("request-promise-native");

const fetchMyIP = function() {                              //Returns a promise of request for ip data (as JSON string)
  return request('https://api.ipify.org?format=json');
};

//console.log(fetchMyIP());


const fetchCoordsByIP = function(body) {  //Makes a request to freegeoip.app Gets latitude/longitude using the provided IP. Returns a promise of request for latitude/longitude
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`)
};

module.exports = { fetchMyIP, fetchCoordsByIP };


module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
};