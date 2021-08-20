clickCounter and hovercounter has same functionality in case of count state and incrementCount
so to implement

Lift counter logic to parent and pass props
if counter component is scattered in react component tree,lifting state is not a great solution

## Why Higher Order Components

- to share common functionality between components

# Higher Order Component - HOC

- its a pattern where a function takes a component as an argument and returns a new component<br>
  <code>const EnhancedComponent = higherOrderComponent(originalComponent)</code><br>
  eq:-<code>const Ironman = withSuit(TonyStark)</code>
