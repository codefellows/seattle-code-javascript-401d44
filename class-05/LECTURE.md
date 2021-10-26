# Class 05: DSA - Linked Lists and Big Oh

## Big Oh Notation

Big Oh??

* Notation that denotes the worst case of efficiency.
* Measure scalability?
* Efficiency of an algorithm.
* a way to measure the rate of growth of complexity??
  * Linear??
  * Logarithmic?
  
Does a an algorithm of function take a lot of time or resources to perform.
  * Mostly concerned with time, but both should be analyzed.

All algorithm or functions have a representation of their "Inputs".
  * Any dependency that a function uses to perfrom operations.

```plaintext

# array is out input, n is the total size of the input.

algorithm first(array)

  # constant number of operations O(1) time
  # constant number of references O(1) space
  return array[0]

algorithm traverse(array)

  # number of operations (n) - O(n)time
  # number of references (1) - O(1) space
  for index in array:
    log to console first[index]


```

## Linked List

Introduction to a new programming behavior. There is no Linked List in the javascript langauge. But javascript can do all the things that linked list can do in other ways.

## What is a Linked List?

* Linked lists are recursive!
* Consists of Nodes, each node has data reference, as well as a reference to another Node.
* Points to specific things in an orderly way.
* Way to "Link" data together dynamically (can grow when we need it to).
  * Other languages still have arrays but they are not dynamic.
  * Often a linked list is used to move items from one array into another.

### Terminology

* Node - what makes up a linked list, main job is to store: contains a value and a next property.
* Value - Anything that would want to store in a linked list.
* Next - A reference to another node.
* Current - A node that is being read during a "traversal".
* Head - The first Node in a Linked List.
* Singly - All nodes have only reference to another node.
* Doubly - All nodes have 2 reference to other nodes.
  * Previous - A reference to another Node besides next.

### Traversal

Reading the contents of an "iterable" ( a things that is made up of repeating pieces ).


Here how that might look:

```javascript

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

  traverseIterative() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // insert a value onto the end of he linked list.
  //  insert at the head in contanst time?
  insert(value) {

  }

  // search to see if there is a value contained, and return true or false
  includes(value) {

  }

  // returns all the values as a string.
  toString() {

  }
}

const list = new LinkedList(); // {head: null }

list.head = new Node(10); // {head: { value: 10,  next: null}}
list.head.next = new Node(25);
list.head.next.next = new Node(2);
list.head.next.next.next = new Node(13);

// how can we traverse a linked list?
function traverseIterative(head) {
  console.log(head); // {value: 10 , next: {Node}}

  let current = head;

  // go through the list
  while(current) {
    console.log(current.value);
    current = current.next;
  }
}

// we want to think about 2 cases
// base case: which should return something, not call your yourself
// recursive case: call yourself on a new value 
function traverseRecursion(current) {
  // recursive case
  if (current) {
    console.log(current);
    traverseRecursion(current.next);
  }

  return;
}

```
