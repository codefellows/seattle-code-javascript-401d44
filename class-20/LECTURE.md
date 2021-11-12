# Class 20: Midterm Project Kickoff

## Announcments

* Partner Power Hour with John!

## Code Review

Yesterday we were tasked with building our CAPS Application with AWS SNS and SQS:

* What do you need to know?
* SNS - Requires only strings to be passed along to AWS / the services that are `subscribed`
* FIFO queue: using the `sqs-consumer` / `sqs-producer`.
  * Different methods for FIFO vs standard.
  * slow response times from SQS.
* Polling for `deliveries` in Message Queue.
  * I believe the `sqs-consumer` will automatically polls for awaiting Messages in the queue.
  * Something on the Vendor side needing to be "throttled"
    * Driver would be sending `packages`.
    * Vendor is consuming `delivered` Messages.
      * Queue is being "throttled?"

## Midterms

### Teams

6 Teams

Team 1:

* Kason
* Marquessa
* Alex B
* Christopher B

Team 2:

* Antoine
* Dario
* Cameron
* Evan

Team 3:

* Tray
* Stephanie
* Harvey
* Tim

Team 4:

* Joe
* Ryan
* Alex G
* Roop

Team 5:

* Jacob G
* Bryce
* Anthony
* Valton

Team 6:

* Sarah
* Justin H
* George
* Barret
* Kety

### Project Requirements

You'll be graded on the following:

* Does you project do what you said it would do?
  * If you accomplish all the MVP features that you want to build you will get a **GOOD** grade.
* Does your code have good standards?
  * If your project code is organized in a way that is confusing or has very little organization (really large functions that do too much) you will get a **BAD** grade.
  * If you project contains a lot of commented out code, or includes functions / modules that are not used you will get a **BAD** grade.
* Do you have tests?
  * If you have a test suite for each MVP feature you will get a **GOOD** grade.
* Do you have Documentation?
  * If you explain how your program works / how to install / what technologies are used / how to deploy / and how to contribute / supporting links to deployment and external docs, you will get a **GOOD** grade.
* Is your project deployed?
  * If your project and it's supporting services are deployed you will get a **GOOD** grade.
