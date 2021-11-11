const dynamoose = require('dynamoose');

// define a schema for dynamoose / dynamo db
const friendSchema = new dynamoose.Schema({
  'id': Number,
  'name': String,
  'role': String
});

// dynamoose.model returns an object we can make queries with
const friendTable = dynamoose.model('friends', friendSchema);

exports.handler = async (event) => {

  let id = event.pathParameters && event.pathParameters.id;
  let idNum = parseInt(id);

  let data = null;
  let status = 500;

  try {
    const friend = await friendTable.query('id').eq(idNum).exec();
    data = friend;
    status = 200;
  } catch(e) {
    console.log(e);
    status = 400;
    data = new Error(e);
  }

  return {
    statusCode: status,
    body: JSON.stringify(data),
  }
};
