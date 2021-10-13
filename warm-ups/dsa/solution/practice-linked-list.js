let LinkedList = require('./lib/linked-list.js');

let list = new LinkedList();
list.append(2);
list.append(4);
list.append(6);
list.append(8);
list.append(10);

function traverse(ll) {
  let current = ll.head;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
  console.log(current.value);
}

traverse(list);
