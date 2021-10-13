let Stack = require('./lib/stack.js');

let stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

function clear(stack) {
  while(stack.peek()) { 
    console.log(stack.pop());
  }
}

clear(stack);
