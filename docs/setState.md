## Never Modify State Directly

the only place where can assign this.state is the constructor
any other time to change state,setState method has to be used
### setState lets know React to rerender component

- setState is asynchronous,so it will not give count value after setState
- To do so,we need to add callback function to setState

#### setState has 2 parameters
1. Sets state value
1. callback function after setting state value

React may group multiple setState methods for better performance,

So whenever you have to update state,based on previous state,We need to pass *Function* as an argument to setState method insted of an object

*Function* can access to previous state,which can be useful to find out new state
second parameter of function can be props also


# Summary

- Always use setState and never modify the state directly
- if a code need to be executed after state update ??
 - then place it as a callback function,which is second argument to setState method
- when we have to update state based on previous state,pass in a function as an argument,Instead of regular object