refs make it possible to access DOM nodes directly within react

what we want to achieve is that,as soon as the page loads,we need input field to be focused
3 steps
1. Create a ref(commonly created in constructor so that it can be referenced throughout component)
2. Attach this ref to input element in render method
3. this.inputref.current.focus();

second use case of ref => to fetch input value
1. this.inputref.current.value

2 ways to create access ref
- React.createRef()
- callbackref(older approach)