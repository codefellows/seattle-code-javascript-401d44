'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const username = 'Jacob';
const password = 'supersecret';

// authenticatio process
//  combine username and password into a string that is colon seperated
const userpass = `${username}:${password}`; // 'Jacob:supersecret'

// encode with base64
const encoded = base64.encode(userpass);
console.log(encoded);
// we want to attach the encoded userpass to a authentication header

/**
  header: {
    authorization: Basic SmFjb2I6c3VwZXJzZWNyZXQ=
  }
*/

// once we are server side we can decode BRIEFLY, but immidiatelyu encrypt
const decoded = base64.decode(encoded);

// Encrypt!

const [ user, pass ] = decoded.split(':');
const complexity = 10; // number that represents the strength of you encrypted hash.
bcrypt.hash(pass, complexity).then(hashedPassword => {
  console.log(hashedPassword);

  // no decrypting, but bcrypt has a way to compare a hash with an unhashed string

  let checkpassword = 'supersecret';

  // one way compare.
  bcrypt.compare(checkpassword, hashedPassword).then(isCorrect => {
    console.log(isCorrect);
  });
});

console.log(user, pass);


