class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

let list = new LinkedList();

list.head = new Node(3);
list.head.next = new Node(4);
list.head.next.next = new Node(6);

function recursiveAverage(node, sum=0, count=1) {	
  
  if (node.next) {
    return recursiveAverage(node.next, sum + node.value, count+1);
  } else {
    return (sum + node.value)/count;  
  }
}

console.log(recursiveAverage(list.head));
