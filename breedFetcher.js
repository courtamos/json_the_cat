const request = require('request'); // node request module

const args = process.argv.slice(2); //command line arguments
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (!breed) { // if no breed passed as arg
    console.log('ERROR: no breed input!');
    process.exit();
  }

  if (error || response.statusCode !== 200) { // code to execute if error occurred
    console.log('statusCode:', response && response.statusCode); // print the response error
    console.log('ERROR: something went wrong');
    process.exit();
  }
  
  const data = JSON.parse(body); // converting string into an object => deserialization
  
  if (!data.length) { // code to execute if breed not found
    console.log('ERROR: breed not found');
    process.exit();
  }

  const catDescription = data[0].description; // capturing deescription in a variable
  console.log(catDescription); // console.log the description

});