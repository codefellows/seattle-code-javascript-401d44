# DSA - Graphs

## Overview

What is a graph?

* A little more relavent to the "real" world.
* Non-linear.
* Like a web of relationships.

Definition: A non-linear collection of nodes, held together by "edges".

* Like a forest of trees.
* Is it a tree?  DirectionalAcyclicalGraph

## Terminology

* Edge: A connection between 2 nodes.
* Vertex / Node: The data storage object.
* Neighbors: Nodes that are connected via an edge.
* Degree: The number of neighbors a node.
* Weight: Some numberical value assigned to a edge.
* Cycle: When a node can point to itself, while traversing.

## Categories

### Directed Vs Undirected

Directed means each node has a parent child relationship, or a flow from one node to the next.
Undirected mean no parent relationship between edjacent nodes.

### Connected VS Disconnected (vs Complete)

Connected graphs have all vertices with at least 1 edge.
Disconnected graphs have at least one vertices with no edges.
Complete graphs have all vertices are connected to all other vertices.

### Cyclical Vs Acyclical

Cyclical has a cycle, acyclical does not.

## Implementation

* Adjacenct Matrix: think of an array of arrays or an `n x n` structure.
* Adjacency List: Think of this as a `Map` with each key being a vertex in the graph, value is a iterable of `edges`.

### Traversals

We don't typically traverse to all vertices.  We always start at a given vertex but not a `head` or `root`.
From our starting point, we want to look at all connected / adjacent vertices.

* Breadth First traversal: very similar to our k-ary breadth first of a tree.
