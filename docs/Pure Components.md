in every 2 sec,setState method is called and rerender parent component
if parent component re-renders,the child components also rerenders,unless we return false from shouldComponentUpdate

Shallow comparison
- Primitive types
number,strings,boolean
a (SC) b returns true if same value & type
- Complex types
objects,arrays
a (SC) b true if a&b reference same object
Ex:
var a = [1,2,3]
var b = [1,2,3]
var c=a;
var ab_eq = (a === b);  // false
var ac_eq = (a === c);  // true

| Regular Component | Pure Component |
|---|---|
| a regular component does not implement<br><br>the shouldComponentUpdate method.<br><br>It always return True by default | a pure component implements shouldComponentUpdate <br><br>with a shallow props and state comparison |
|  | SC of prevState with currentState<br><br>SC of prevProps with currentProps<br><br>if difference,re-render component |


- if parent dont rerender,children also dont rerender
- Pure Component Gives Performance boost in some scenario
- never mutate the state,always return a new object that reflects new state