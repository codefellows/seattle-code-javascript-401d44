'use strict';

const { db, phrases } = require('../model');

// Initialize any things that our tests need
beforeAll(async () => {
 // make sure that my tables exist.
 await db.sync(); // creates our tables if they do not exist
});

// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});


describe('Testing our sequelize model', () => {

  it('Should be able to create a Phrase', async () => {

    let newPhrase = await phrases.create({
      words: 'Some test words',
      title: 'My new phrase',
    });

    console.log(newPhrase);
    expect(newPhrase.id).toBe(1);
    expect(newPhrase.words).toBe('Some test words');
  });
});
