const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v/breeds/search?q=${breed}`;

request(url, function(error, response, body) {
  if (error) {
    console.log("error: ", error);
	return;
  }

  if (response && response.statusCode !== 200) {
    console.log('statusCode: ', response.statusCode);
	return;
  }

  const data = JSON.parse(body);

  if (data.length >= 1) {
    const breedDescription = data[0].description;
    console.log(breedDescription);
    return;
  } else {
    console.log('Breed not found.');
    return;
  }
});
