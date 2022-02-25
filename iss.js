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
    }
    
    else {
      const ip = JSON.parse(body).ip;
        return callback(null, ip);
      }
    })
  };


const fetchCoordsByIp = function(ip, callback) {
  const url = 'https://api.freegeoip.app/json/?apikey=993e7850-95e9-11ec-a11d-db8fc96eaf60';
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode}. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } 
    if (response.statusCode === 404) {
      const msg = `Status code ${response.statusCode}. Response> ${body}`;
      callback(Error(msg), null);
    } else {
      const latitude = JSON.parse(body).latitude;
      const longitude = JSON.parse(body).longitude;
      return `latitude: ${latitude}, longitude: ${longitude}`;
    }

  })
};


module.exports = { 
  fetchMyIP,
fetchCoordsByIp };
