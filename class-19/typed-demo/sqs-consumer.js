'use strict';

const { Consumer } = require('sqs-consumer');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/275199309843/Messages';

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    console.log(message);
  }
});

consumer.start();
