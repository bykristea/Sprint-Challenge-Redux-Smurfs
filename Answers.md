1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A: .Get, .Post, .Put. Post adds in the functionality to add to a database.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: Actions pass an action/function to the store. 
    Reducer: tell the state how to change, based of the actions sent to the store. 
    Store: stores the state in an immutable object tree. Store makes componenets controllable, because the only way to change data is to use action, which then changes state within the reducer. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Component state stored locally, not accessible from other components unless passes as props to sub components. Application state global, using stores to hold state, so any component in the app can access it as long as you hook it in. 

4.  What is middleware?

A: a bridge between dispatch and reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: redux-thunk is a middlware that calls actions that are functions and passes the action to redux itself. 


6.  Which `react-redux` method links up our `components` with our `redux store`?

A: First provide the redux store to APP then use connect to link up components. 

