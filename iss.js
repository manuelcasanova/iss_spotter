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
  // use request to fetch IP address from JSON API
  const url = `https://api.ipify.org?format=jsonp&callback=getIP`;
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
      const data = JSON.parse(body);
      if (!data.length) {
        return callback(`No data`, null);
      } else {
        return callback(null, body);
      }
    }
  });
};

module.exports = { fetchMyIP };