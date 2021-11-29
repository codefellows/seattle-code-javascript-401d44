# Class 28: React Component LifeCycle / useEffect Hook

## Announcements

* This week might feel long
  * No DSA and no Career Coaching Workshop
  * There's only 2 more CCW
  * 1 more DSA.

## Warm Up

Traverse a linked list containing integers, recursively, return the average (arithmetic mean) of all the numbers in the list.

What did we come up with?

* Valton ( no idea, how to do traversal )
* Evan had a great traversal.

```javascript

function recursiveAverage(node, sum=0, count=1) {

  if (node.next) {
    return recursiveAverage(node.next, sum + node.value, count+1);
  } else {
    return (sum+node.value)/count;
  }
}

recursiveAverage(list.root);

```

## Code Review Lab 27

* See review folder

## useEffect / Component LifeCycle

useEffect - Calls a function whenever "something" mutates.

* The component changes in some way, we can tell React what should when that change occurs.
* useEffect(callback) - any change at all.
* useEffect(callback, [])  - just once.
* useEffect(callback, [stateVariable]) - only runs when that single variable updates (add more variables to watch for more changes)
* useEffect(return callback) - cleanup (runs before the component is not rendered)

React component go through a set of stages as they are being rendered in the Browser.

* ComponentWillMount (react is gathering data for a component)
* ComponentDidMount (the data is there, we just have anything rendered yet).
  * useEffect(callback, []);
* Component is rendered
* ComponentDid/WillUpdate - a change occured (within that single component)
  * useEffect(callback)
  * useEffect(callback, [state])
* ComponentDid/WillUnmount - a component is about removed from the browser.
  * useEffect(return callback)

```js

class App {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jacob'
    }
  }

  // these do not work in function component.
  componentDidUpdate((state) => {
    this.setState({});
  });

  render() {

  }
}


```
