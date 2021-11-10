'use strict';

const client = require('socket.io-client');
const search = client.connect('http://localhost:3000');

// tell our client that we should listen for the search event.
search.on('search', console.log);

// when do we run this??
search.emit('search', {text: 'foo'});
