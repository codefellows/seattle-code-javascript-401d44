# Class 16: AWS Intro / EC2 and Elastic Beanstalk

## Announcements

Feedback:

* We didn't have a normal week: Mixed feeling about Cascadia JS.
  * So much to dooooooo!
  * Chance to hear personal stories.
  * So many things grabbing our attention.
* We are teaching ourselves a lot.
  * This is a skill that is more than learning the specifics of any technology / design pattern.

1 On 1 synchs: please schedule some time with me: https://jacobknaack.youcanbook.me
  
* Please fill out instructor assignment.

## Warm Up

Binary Search Trees: Insert a value into a BST.

* BST is a tree, whose nodes only contain `left` and `right` references to other nodes, and all `left` nodes are less than the current nodes value, and all `right` nodes are greater than the current nodes value.
  * Insert a new value appropriately within a binary search tree!

```js

// What is the benefit of recursive vs iterative.

// other data types stores values that aren't
// yes there are but those are unsual.

//  solution?

// Jacob G
// create Node Class
// create BST class

function insert(value) {
  // create a new node
  let newNode = new Node(value); // {value, left, right}

  if(!this.root) {
    this.root = newNode;
  }

  let current = this.root;

  while(current) {
    // make sure current value is not equel
    if (value === current.value) {
      throw new Error('No duplicates please');
    }

    // check if value is less
    if(value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        break;
      } else {
        current = current.left;
      }
    } else {
       if (current.right === null) {
        current.right = newNode;
        break;
      } else {
        current = current.right;
      }
    }
  }
}


function insertRecursive(current, value) {

  // current might be null eventually if we are always passing references recusively
  if(!current) {
    // we need to add a new Node here in this position/.
    current = new Node(value); // this isn't a solution, but we want to set the reference that current points to.
  }


  // is current greater that or less than our given value;  
  if(current.value > value) {

    //  this will prevent the need for the above base case
    if(!current.left) {
      current.left = new Node(value);
    } else {
      insertRecursive(current.left, value);
    }

  } else if (current.value < value) {

    if(!current.right) {
      current.right = new Node(value);
    } else {
      insertRecursive(current.right, value);
    }
  }
}
```

## Code Review

Event Driven Server

* Subscribe and trigger methods!!
* 

## AWS

This week involves a lot of configuring paid services, and AWS is not good about warning you when things sould get messy.

### Distributed Application Architecture (serverless)

Our application doesn't have a single monolithic server, instead we distribute features across a range of services.

* REST API - has it's own cloud service.
* Auth / Auth - has it's own cloud service, connected via a USER / ROLE.
* Database - There's AWS service for this.

Why??

* Scalability
  * vertical - more powerful machines.
  * horizontal - more machines.
* Maintenance
  * All we need to do is make sure our code works, not worry about where it's deployed and how it's integrated.

## Virtual Machines with EC2 / Elasic Beanstalk

Back in the day any app was hosted on a server(local machine).
* Users grow and you need to scale.
* As a cloud service, you can add machines or get more powerful in the cloud with a Virtual Machine.
* EB: Configures our virtual environment for a specific usecase.
  * I'm running code inside of Node.

Deploying with `eb` cli.

When you zip include:
 * Everything but node_modules.

* configure your aws credentials
* `aws` cli:  `aws configure`.
* Be sure to `cd` into your project directory.
  * run `eb init` to initalize your application.
  * run `eb create <some-name>` to create your environment.
  * if you change anything, run `eb-deploy` from your terminal.
