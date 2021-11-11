'use strict';

const AWS = require('aws-sdk');
// configuire
AWS.config.update({ region: 'us-west-2'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:message';

const payload = {
  Message: 'Hello from Node!',
  TopicArn: topic, // required for telling where to send a notification
};


// if we don't chain .promuise on the end, you will pass a callback

// if you want to use async use .promise()

sns.publish(payload).promise() 
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });
