'use strict';

class Stack {

  constructor() {
    this.length = 0;
  }

  push(item) {
    if ( item ) {
      this[this.length++] = item;
    }
  }

  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  peek() {
    return this[this.length-1];
  }

}

module.exports = Stack;
