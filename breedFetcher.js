const request = require('request'); // node request module

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName; // creating url to add breedName

  request(url, (error, _response, body) => {  // '_' infront of response beacuse request requires the set parameters, this denotes that it's not being used in the actual code
    if (error) { // code to execute if error occurred
      callback(error);
      process.exit();
    } else {
      const data = JSON.parse(body); // converting string into an object => deserialization

      if (!data.length) { // code to execute if breed not found
        callback('breed not found');
        process.exit();
      }

      const catDescription = data[0].description; // capturing deescription in a variable
      callback(null, catDescription); // return the description

    }
  });
};

module.exports = { fetchBreedDescription };