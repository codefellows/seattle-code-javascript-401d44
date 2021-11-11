# Publisher and Subscriber

Configure a socket `server` and 2 client applications: a `publisher` and a `subscriber` that can connect to the socket server.  The publisher application should take in user input from the terminal and send it to the server. The subscriber application should listen for any even that are 'published' to the socket server.

* The Server should allow sockets to emit payloads to the following events: 
  * `Publish`:  should emit a payload to any socket clients subscribed to the 'publish' event.

* The `publisher` client application should emit a payload to the server, the payload should contain json with the following properties:
  * message: STRING
  * The input for the message should come from terminal input when the node process in initialized.

* The `subscriber` client application should listen for any payload that is emitted to the `Publish` event on the socket server.
  * log the payload to the console.

STRETCH GOAL:  Implement the [Message Queue](https://github.com/codefellows/seattle-code-javascript-401d44/blob/main/class-13/typed-demo/message-queue/lib/MessageQueue.js) and save each message to the queue.
  
* Emit a `received` event on the `subscriber` application that confirms the message has been received and removes if from the queue.
