class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; // the first
  }

  push(value) {
    let previousTop = this.top;
    let nodeToAdd = new Node(value);
    nodeToAdd.next = previousTop;
    this.top = nodeToAdd;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let nodeToAdd = new Node(value);
    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = nodeToAdd;
    }
    this.back = nodeToAdd;
    
    if (!this.front) {
      this.front = nodeToAdd;
    }
  }

  dequeue() {
    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;
    
    // account for the back if we are the last node
    if(this.back === nodeToRemove) {
      this.back = nodeToRemove.next;
    }

    return nodeToRemove.value;
  }
}

const stack = new Stack();

stack.push(30);
stack.push(13);
stack.push(74);
// console.log(JSON.stringify(stack));

let one = stack.pop(); // 74
let two = stack.pop(); // 13
let three = stack.pop(); // 30

// console.log(one, two, three);
// console.log(JSON.stringify(stack));

let queue = new Queue();

queue.enqueue(100);
queue.enqueue(32);

// console.log(JSON.stringify(queue));

let first = queue.dequeue();
let second = queue.dequeue();
console.log(first, second);
console.log(JSON.stringify(queue));
