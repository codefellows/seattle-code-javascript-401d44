'use strict';

const {Edge,Vertex,Graph} = require('./lib/graph.js');

function bfs(graph, startNode) {

  const queue = [];
  const visitedNodes = new Set();

  queue.push(startNode);
  visitedNodes.add(startNode);

  while (queue.length) {

    const currentNode = queue.shift();

    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) {

      const neighborNode = neighbor.vertex;

      if (visitedNodes.has(neighborNode)) {
        continue;
      } else {
        visitedNodes.add(neighborNode);
      }
      queue.push(neighborNode);
    }
  }
  console.log(visitedNodes);

  return;
}

function dfs(graph, startNode) {

  const stack = [];
  const visitedNodes = new Set();

  stack.push(startNode);
  visitedNodes.add(startNode);

  while (stack.length) {

    const currentNode = stack.pop();

    const neighbors = graph.getNeighbors(currentNode);

    for (let neighbor of neighbors) {

      const neighborNode = neighbor.vertex;

      if (visitedNodes.has(neighborNode)) {
        continue;
      } else {
        visitedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }
  console.log(visitedNodes);

  return;
}


const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);


dfs(graph, ten);
bfs(graph, ten);
