# Class 12: Web Sockets and Socket.io

## Announcments

* Cascadia JS conference starts tomorrow, and continues Thursday!
  * Class 13 lab will be extra credit!
  * Code Challenges for class 13 / 14 will be extra credit as well!

## Warm Up

Create a program called `MessageQueue` that can store message sent to a specific client, and garentee delivery in the order the messages where sent.

* `add` - take in a client ID and message and store it in a queue.
* `received` - take in a client ID and message and validate whether or not that is the next message, if so remove it from the queue.
* `fetch` - takes in an client Id, returns the next message in the queue.
* `getAll` - takes in a client id, returns all message in the queue.

## Code Review

Event Driven system, Vendors / Drivers / Hub server communicate between one another.
  
* Testing our event handlers.
  * We only test our own code (no dependencies required to pass tests), not the event module.
* Code Challenges: PsuedoQueue.

## Web Sockets and TCP

Up until today, all our events and payload remained on on single machine. Toady we are connecting multiple machines togther with a TCP connection.

TCP: Transmission Control Protocol

  * Managing packets of data being sent between computers
  * HTTP - depends on a TCP connection, it is higher in the OSI model of computer communication.
    * Establishes a connection, sends some data, and then closes that connection.
  * TCP doesn't close a connection after packets of data are finished transfering.
    * Full-duplex data can be sent and received simultaneiously.

Web Sockets - are the client server interface that uses TCP.
  * Are an upraded HTTP request.
 
## Socket.io
