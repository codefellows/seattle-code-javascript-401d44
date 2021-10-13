'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }


  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    // step forward node-by-node until one has an empty next value
    while (current.next) {
      current = current.next;
    }

    // add the new value to the empty .next spot that's at the end of the list
    current.next = new Node(value);
  }

}

module.exports = LinkedList;
