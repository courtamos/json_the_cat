const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; // command line arguments

fetchBreedDescription(breedName, (error, desc) => {
  if (error) { // code to execute if error
    console.log('Error fetch details:', error); // console.log of error info
  } else { // code to execute if no error
    console.log(desc); // console.log of cat description
  }
});