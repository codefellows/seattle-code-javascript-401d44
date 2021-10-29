# Class 10: Stack and Queues

## Present our Auth API Servers

Team 4:  Password Managing App:

- Linking Users to Apps in order to manage passwords!
- Storing Apps for users of different types / roles.
Team Anthony Dario Harvey:  Bulletin Board App

- Shared bulletin board application that shares posts with students / TAs/ Teachers
- CMS like content creation for a bulletin board.
Team Sarah / Ryan / Sarah: todo list

- Todo list: creating lists for users to add and remove tasks from TODO to completed
- Stretch goals include creating a list in order to group listItems into groups of items.
- Good communication / having open rules and expectation about time and outcomes.
Team Steph / Barret / Joe / Christopher

- Shopping list application to manage lists for users.
- Nice problem solving techniques.
- Way to fail gracefully!
- You data models are good, your interface / controller is not so good.
Team Roop / George / Alex : Busniess Review Platform

- Great access control
- Allows Admins to create busniess types
- Allows Users to search for businesses and leave comments and reviews.
- Great association
Team Katy / Brian / Alex B: Message / Blog board

- Reddit like message board.
- Blog style content creation.
- Authors / keywords / documents
Team Cameron Chattray Evan: Riddles generator

- Fun problem domain!
- Allows Users to add Riddles to a pool of riddles.
- Invidual queries of hints and solutions!

Team Tim / Bryce / Jacob G: Message board

- Profile for users.
- Allows users to send messages to specific users.
- Users can get reciepts from sent messages.

## Linked List Review

What is a linked list?

- A "linear" sequence of data values.
- like a very combersome array.
- like a "train" front and end
  - front: head
  - end: tail
- pointers to other parts of our list / train
  - our pointers are often referredd with the `next`.
  - we use Nodes to refer to the individual peices of the list.
- Traversal is linear as well
  - searching or reading values in the list.

## Stacks and Queues

The order of our nodes and next properties are very specific.

- The Stack is a type of linked that follows one simple rule:
  - FILO - First in, Last out.
    - The first node added to a stack, will the last node read when travesing / or removing nodes.

### Stack Terminology

- Top: the starting point for nodes in the stack.
- Pop: Removal method, takes the first thing off of the `top`.
  - Mutation, changing what is in our stack.
- Push: Adds a new Node to the stack, at the Top.

## Queue

Also a very specific order, but flipped from the Stack

- Follow FIFO rules
  - FIRST in FIRST out

### Queue Terminology

- Enqueue: method for adding things to a queue, start at the back and move to the front
- Dequeue: method for removing things from a queue, starts from the front.
- Front: remove nodes from here
- Back: add nodes here
