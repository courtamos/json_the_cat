const { fetchBreedDescription } = require('../breedFetcher'); // requiring fetchBreedDescription function
const { assert } = require('chai'); // requiring chai

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('FakeBreed', (err, desc) => {
      // we expect an error for this scenario
      assert.equal(desc, null);
      
      const expectedErr = 'breed not found';

      // compare returned error
      assert.equal(expectedErr, err);

      done();
    });
  });
});