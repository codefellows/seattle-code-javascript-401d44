let Queue = require('./lib/queue.js');

let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(8);
q.enqueue(10);

function traverse(queue) {
  let item = null;
  while( item = queue.dequeue() ) {
    console.log(item);
  }
}

traverse(q);
