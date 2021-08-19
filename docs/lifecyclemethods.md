## lifecycle methods of class components
4 phases
1. Mounting - when an instance of a component is being created and inserted into the DOM
2. Updating - When an object is being rerendered as result of changes to either its props or state
3. Unmounting - When a component is being removed from the DOM
4. Error Handling - When there is an error during rendering,in a lifecycle method,or in the constructor of any
                     child component

## During mounting phase,we have 4 methods
1. constructor
1. static getDerivedStateFromProps
1. render 
1. componentDidMount

## During Updating Phase
1. static getDerivedStateFromProps
1. shouldComponentUpdate
1. render
1. getSnapshotBeforeUpdate
1. componentDidUpdate

## During Unmounting
1. componentWillUnmount

## During Error Handling
1. static getDerivedStateFromError
2. componentDidCatch