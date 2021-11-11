# Class 19: SNS and SQS

## Warm Up

I pushed up a [warm up folder](https://github.com/codefellows/seattle-code-javascript-401d44/tree/main/class-19/warm-up).

See warm up for solution!

## Code Review

* How to get `one` thing from a table!
* Find the proper docs and spec: `dynamoose`.
* Getting a response, but now data.
  * Make sure you `dynamoose.model(table-name, schema);
  * Makes a tables if it doesn't exist.
* Delete Item by Id, from a table.
  * Wrong ID, goes through but does not delete the correct thing.

## SNS and SQS

### Simple Notification Service

Any ditrbuted application probably needs a way to communicate events that are happening on various pieces of the system.

A notification can be an email, a sms message, a AWS trigger, an http request.
  
* Send an email
* than send an http request
  * => Subscribers
    * `topics` analagous to socket.io events.
    * We need to create and SNS topics and allow subcribers to listen for updates on the topic.
    * Publishers send `payload` to a topic, `subscriber` receivce those paylaods.


SNS Publisher: some machine that is sending message / notification
  * Notification - a call to action not necessarily sending data.

Event names -> topics

SNS Subscriber: a machine or service that wants to know when a message / notification occurs
  * Responder - do something in response to the call to action.

## SQS

Simple Queue Service.  There are subscribers and publishers, but the goal is not a call to action, but more of data transfer. Garantees message delivery.
