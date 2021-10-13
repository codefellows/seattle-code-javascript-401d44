'use strict';

const superagent = require('superagent');

const fetchPeopleWithPromises = () => {

  return superagent.get('https://swapi.co/api/people/')
  .then(response => {
    return response.body.results.map( person => {
      return superagent.get(person.url)
    })
  })
  .then(peopleRequests => {
    return Promise.all(peopleRequests)
    .then(people => {
      let names = [];
      for( let data of people ) {
        names.push(data.body.name);
      }
      return names;
    })
  })

};

fetchPeopleWithPromises()
.then(people => console.log({people}));


const fetchPeopleWithAsync = async () => {

  const peopleSet = await superagent.get('https://swapi.co/api/people/');

  const people = (peopleSet.body && peopleSet.body.results) || [];

  const peopleRequests = people.map( (person) => {
    return superagent.get(person.url)
  });

  const names = await Promise.all(peopleRequests)
  .then(people => {
    let names = [];
    for( let data of people ) {
      names.push(data.body.name);
    }
    return names;
  });

  return names;

};

fetchPeopleWithAsync()
.then(people => console.log({people}));

