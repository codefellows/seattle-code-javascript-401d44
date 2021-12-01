# Class 31: React Context

## Warm Up

See Invision board: https://projects.invisionapp.com/freehand/document/h9Np46jDy

## Code Review: useReducer

Why do we use reducers rather than just state variables:

* A reducer is going to allow you to define state changes once, instead of everytime in a component (that doesn't normally leave that component).

```javascript
let [name, setName] = useState('');
let [age, setAge] = useState(0);
let [person, setPerson] = useState({});

setName({name: 'Jacob'});

return (
  <p>{name}</p>
)
```

What is a reducer? - a function, which can update / change "state".

`let reducer = () => "updated State"`

What is an action? - an object { type: 'ADD_NUMBER', paylaoad: <data-goes-here> }, specifies what should change in our "state".

```javascript

function reducer(state, action) {

  switch(action.type) {
    case 'UPDATE_REQUEST':
      return {
        ...state,
        request: action.payload,
      }
    case 'UPDATE_METHOD':
      return {
        ...state,
        request: {
          ...state.request,
          method: action.payload,
        }
      }
  }
}

const handleUpdateMethod = (dispatch) => (method) => {
  dispatch({
    type: "UPDATE_METHOD",
    paylaod: method,
  });
}


function App () {

  let [state, dispatch] = useReducer(reducer, {
    history: [],
    request: {
      url: '',
      method: '',
      body: {}
    },
  });

  useEffect(() => {
    if (request.method) {
      callApi(request);
    }
  }, [request]);

  return (
    <Form handleUpdateMethod={handleUpdateMethod(dispatch)} />
  )
}

// ************

function Form ({ handleUpdateMethod }) {

  return (
    <form>
      <button onClick={(e) => handleUpdateMethod(e.target.value)} value="GET">GET</button>
    </form>
  )
}

```

## Context Feature

When we talk about `Context` - react gives us a built in way to opt in to values without passing them down directly through Props.

* State becomes global, as long as the component you are reading values in, is part of the React DOM tree.  Reduce the need to use props quite as much.
  * Provider - A component near the root where our context values are defined.  A single source of data for all components.
  * Consumer - A number of components that can read and perhaps update values stored in context.
  * Context Singleton - and object created by React.   Create as many of these as you want different context features.
    * Theme - controls all theme like data: darkMode => true, fontSize => '12', fontFamily => 'Times New Roman'
    * SiteSettings - controls all site wide inforamtion: title => 'My awesome website', twitter => 'jacobstwitterhandle'
    * Auth - is a user authenticated.

## Theme / Settings with React Context

See `typed-demo` folder
