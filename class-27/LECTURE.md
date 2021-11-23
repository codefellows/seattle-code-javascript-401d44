# Class 27: Hooks Continued - Component State

## Announcements

Tomorrow we have Career Coaching in the morning.

* All of our Career Coaching assigments are due tomorrow.
* Labs / Code Challenges today are pushed back until Sunday.

* DSA is this afternoon: Hash Tables (2:00PM) - lab due on Sunday.
* Assignments shifted to next week.

## Warm Up

https://projects.invisionapp.com/freehand/document/WyRqqmFTW?saveDraft=true

## Hooks Review

How did the lab go yesterday?

* Deployment => not allowed to use arrow.
  * We should talk about the linter.
  * create react app wants you to export a named function.
* Deploy on Netlify?

What is React?

* A library that allows you to write HTML with JavaScript (JSX).
  * For building User Interfaces.
  * rendering is straght forward.
  * Fast to render.
* Hooks?
  * something changes! - the hook notices and tells React about it.
  * Often are used to react to state changes.
  * Gracefully allow react to update.
  * Functions called withing a component.
* useState => state?
  * some data that defines the values used for some functions / behavior
  * It can change, and it should change as a user does things.
  * Allows to seperate application vs component state.
* What is a `getter` vs a `setter` when it comes to hooks?
  * `let [name, setName] = useState('jacob');`
  * getter - variable for reading a value.
  * setter - function for changing a value.

## Component State - useEffect

See whiteboard Notes!

### RTL Testing
