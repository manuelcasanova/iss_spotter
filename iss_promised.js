const request = require("request-promise-native");

const fetchMyIP = function() {                              //Returns a promise of request for ip data (as JSON string)
  return request('https://api.ipify.org?format=json');
};

//console.log(fetchMyIP());

module.exports = { fetchMyIP };