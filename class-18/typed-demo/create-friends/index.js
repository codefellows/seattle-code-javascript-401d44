const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    
  const jsonBody = JSON.parse(event.body);

  // define a schema for dynamoose / dynamo db
  const friendSchema = new dynamoose.Schema({
    'id': Number,
    'name': String,
    'role': String
  });
  
  const friendTable = dynamoose.model('friends', friendSchema);

  let data = null;
  let status = 500;

  try {
    let id = Math.floor(Math.random() * 100);
    let friend = new friendTable({ id, ...jsonBody});
    data = await friend.save();
    status = 200;

  } catch(e) {
    status = 400;
    data = new Error(e);
  }

  const response = {
      statusCode: status,
      body: JSON.stringify(data),
  };
  return response;
};
