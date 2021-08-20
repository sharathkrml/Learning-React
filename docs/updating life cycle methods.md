methods that are called when a component is  being re-rendered because of changes in props or states 

5 methods, 3 are rarely used
| method | use |
|---|---|
| static getDerivedStateFromProps(props,state) | method is called every time when component is re-rendered<br>Used to set state<br>Do not Cause side effects Ex:HTTP requests |
| shouldComponentUpdate(nextProps,nextState) | receives updated states and props<br>Dictates if component should be re-rendered or not<br>return true or false by comparing old and next states and props<br>For Performance Optimization<br>Do not cause side effects, Ex:HTTP requests,Calling the setState method |
| render() | Only required method<br>Read props and states and return JSX<br>Do not change state or interact with DOM or make Ajax calls |
| getSnapshotBeforeUpdate(prevProps,prevState) | called right before the changes from the virtual DOM are reflected in the DOM<br>Capture some information from the DOM,Ex:User Scroll position<br>Return null or value,Returned values is passed as third parameter to next method |
| componentDidUpdate(prevProps,prevState,snapshot) | Called after render is finished in re-render cycles<br>Called only once in re-render cycle<br>Cause side effects |