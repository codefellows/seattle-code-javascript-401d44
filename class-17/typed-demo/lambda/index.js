const AWS = require('aws-sdk');
let s3 = new AWS.S3();
require('dotenv').config();

exports.handler = async (event) => {
    // TODO implement
    
    console.log(s3);
    let bucket = event["Records"][0]["s3"]["bucket"];
    let object = event["Records"][0]["s3"]["object"];
    console.log(bucket, object);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
