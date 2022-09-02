const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback("error: ", error);
      return;
    }

    if (response && response.statusCode !== 200) {
      callback('statusCode: ', response.statusCode);
      return;
    }

    const data = JSON.parse(body);
    if (data.length >= 1) {
      const breedDescription = data[0].description;
      callback(null, breedDescription);
      return;
    } else {
      callback('Breed not found.', null);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };