/**
* Makes a single API request to retrieve the user's IP address.
* Input:
*   - A callback (to pass back an error or the IP string)
* Returns (via Callback):
*   - An error, if any (nullable)
*   - The IP address as a string (null if error). Example: "162.245.144.188"
*/

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


module.exports = {
  fetchMyIP,
  fetchCoordsByIp };
