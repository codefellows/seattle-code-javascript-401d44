const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    
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
    // read from our DB
    data = await friendTable.scan().exec();
    status = 200; 
  } catch(e) {
    data = new Error(e);
    status = 400;
  }

  const response = {
      statusCode: status,
      body: JSON.stringify(data),
  };
  return response;
};
