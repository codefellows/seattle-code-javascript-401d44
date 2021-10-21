'use strict';

const express = require('express');
const { clothes } = require('../../models');

const router = express.Router();

router.get('/', getAllClothes);
router.get('/:id', getOneClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

// start writing our route handlers!
// what's the first we want this function to do?
async function getOneClothes(request, response) {
  // perfrom our CRUD
  
  const id = request.params.id;
  // how do we get our Clothes from the DB
  const foundClothes = await clothes.findByPk(parseInt(id));
  response.status(200);
  response.send(foundClothes);
}

async function getAllClothes(request, response, next) {
  try {

    const foundAllClothes = await clothes.findAll(); //returns all rows
    response.status(200);
    response.send(foundAllClothes);

  } catch(e) {

    // response.status(500);
    // response.send(e);
    next(e);
  }
}

async function createClothes(request, response, next) {
  try {

    const newClothes = await clothes.create({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(201); // Creation successful
    response.send(newClothes);

  } catch(e) {
    next(e);
  }
}

async function updateClothes(request, response, next) {
  try {
    // does this actually update?
    const updatedClothes = await clothes.update({
      name: request.body.name,
      size: request.body.size,
    }, { where: { id: request.params.id } });

    response.status(200);
    response.send(updatedClothes);
  } catch(e) {
    next(e);
  }
}

async function deleteClothes(req, res, next) {
  try {

    // this will return an instance of the clothing model (which has its owne methods)
    // const foundClothes = await clothes.findById();
    const deletedClothes = await clothes.destroy({ where: { id: req.params.id} }); // returns the number rows deleted
    res.status(200);
    res.send(deletedClothes);

  } catch(e) {
    next(e);
  }
}

module.exports = router;
