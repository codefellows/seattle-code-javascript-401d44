# Class 11: Event Driven Programming

## Announcements

Feedback:

* TA support is still lacking.
  * COVID mandates are slowing hiring here.
* Time Managment:
  * Feeling like we're spending all day in class,
  * Lecture running a little long last week.
  * Mob Programming / in class exercises are good!
  * 15 minutes rule: message me!
    * I'll be jumping around Remo from 4 - 6 PM.

1 on 1 Syncs with me:

* Please schedule a time slot to meet with me [here](https://jacobknaack.youcanbook.me)
* Also complete canvas assignment.
  * Get you prepped for graduation.

## Warm Up

Create a Program called `History` that can track the order in which websites are visited in the Browser. This program uses a feature called `navigate` to redirect the browser to a URL, and saves that URL.

* Create a `backwards` and `forwards` feature:
  * `backwards` returns the last url visited vby the browser
  * `forwards` returns the url that was previously visited before`backwards` was called.

```js

// takes URL string
class History {
  constructor() {
    this.current = null;
    this.front = [];
    this.back = [];
  }

  // setting curret navigates the browser.
  navigate(url) {
    if(this.current !== url) {
      this.back.push(this.current);
      this.front = [];
    }
    this.current = url;
  }

  forwards() {
    if (!this.front.length) {
      throw new Error('Nothing here');
    }

    this.back.push(this.current);
    this.current = this.front.pop();
  }

  // move back 1 index 
  backwards() {
    if (!this.back.length) {
      throw new Error('Nothin here');
    }
    
    this.front.push(this.current);
    this.current = this.back.pop();
  }
}
```

## Event Driven Design Patterns

We've been doing a lot of event driven things in this program:

* `addEventListener` : user does something => browser responds.
* http requests: request => response
  * all of these things have a start.

This week we are challenged to think of each event responding with asynchronous responses.

* Message board:
  * channels with multiple members
    * each time a message is sent many many things respond asychronously.
    * All clients respond to the emission of an event.

Observer Pattern:

* A subject with other client that listen for specific events.
* Observers are the other clients that are waiting for events to occur.

## Node Events

Uses a singleton to create a pool of events. Allows for other module to use that pool to emit events to other modules that are using that same pool to perform things Asynchronously.

## Lab Prep
