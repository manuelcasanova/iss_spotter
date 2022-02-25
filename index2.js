const { fetchMyIP, fetchCoordsByIP, fetchIssFlyOverTimes } = require('./iss_promised');

fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchIssFlyOverTimes)
.then(body => console.log(body));

