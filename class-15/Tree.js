'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function PreOrder(current) {
  // reading the value
  console.log(current.value);
  
  if (current.left) {
    PreOrder(current.left);
  }
  if (current.right) {
    PreOrder(current.right);
  }
}

function InOrder(current) {  
  if (current.left) {
    InOrder(current.left);
  }

  // reading the value
  console.log(current.value);
  
  if (current.right) {
    InOrder(current.right);
  }
}

function PostOrder(current) {  
  if (current.left) {
    PostOrder(current.left);
  }
  
  if (current.right) {
    PostOrder(current.right);
  }

  // reading the value
  console.log(current.value);
}

let tree = new BinaryTree();

tree.root = new Node('10');
tree.root.left = new Node('13');
tree.root.left.left = new Node('23');
tree.root.left.left.left = new Node('25');
tree.root.left.left.right = new Node('50');
tree.root.right = new Node('2');
tree.root.right.right = new Node('45');
tree.root.right.right.left = new Node('3');
tree.root.right.right.left.right = new Node('7');

console.log('Pre Order:');
PreOrder(tree.root);
console.log('**********');
console.log('In Order:');
InOrder(tree.root);
console.log('**********');
console.log('Post Order:');
PostOrder(tree.root);


