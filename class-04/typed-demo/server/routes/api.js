'use strict';

const express =require('express');
const router = express.Router();
const { messages, channels } = require('../../models');

const Collection = require('../../models/lib/Collection.js');

const modelMap = {
  messages: new Collection(messages),
  channels: new Collection(channels),
};

router.use('/:model', function(req, res, next) {

  const model = modelMap[req.params.model];
  // const method = request.method;
  
  if (!model) {
    next('No model found');
  }
  
  req.model = model;
  console.log(req.model);
  next();
  // switch(method) {
  // case 'GET':
  //   model.read(req.params.id);
  //   break;
  // case 'POST':
  //   model.create(req.body);
  //   break;
  // case 'PUT':
  //   model.update(req.params.id, req.body);
  //   break;
  // case 'DELETE':
  //   model.delete(req.params.id);
  //   break;
  // default:
  //   next('Model Router Error');
  // }
});

router.get('/:model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read();
  res.send(records);
});

router.get('/:model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.read(id);
  res.send(record);
});

router.post('/:model', async (req, res, next) => {
  const model = req.model;
  const json = req.body;
  let newRecord = await model.create(json);
  res.send(newRecord);
});

module.exports = router;

