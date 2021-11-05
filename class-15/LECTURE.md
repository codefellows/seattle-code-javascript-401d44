# Class 15 - DSA Trees

## What is a Tree?

* Something with branches and leaves.
* Order of operations, decisions ???
* organism with levels and aspects.

A data structure made up of `Nodes` in a non-linear, non-cyclical, directional order.
  * once we lose directionality our tree becomes a graph.

## Terminology

* Root: starting node, the beginning of a tree.
* Branch / Edge : A Connection to another node.
  * Child / children: a node that is a decendant of another node, the product of an edge.
* Leaf: A Node in a tree that has no children / edges.
* Height: the number of edges from the root, to the furthest leaf.
* K: the maximum number of nodes a tree can have.
  * For k-ary trees.
  * Not binary tree(tree with only 2 children)
* Nodes that are part of a binary tree have 'left' and 'right'.

## Traversals

1) Depth First - Proritize all left / right sub nodes, before looking at all nodes on the current level.
   1) Pre-order: Start by reading the current node value, than move to the left, followed by the right
      1) root => left => right


```javascript

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

```


   1) In-order: left => root => right
  
```javascript
function InOrder(current) {  
  if (current.left) {
    PreOrder(current.left);
  }
  // reading the value
  console.log(current.value);
  if (current.right) {
    PreOrder(current.right);
  }
}

```

   1) Post-order: left => right => root
1) Breadth First - Look at all the nodes on the current level before looking at sub nodes.
