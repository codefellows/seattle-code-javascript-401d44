'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

}

module.exports = {BinaryTree, Node};
