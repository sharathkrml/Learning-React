A class component that implements either one or both of the lifecycle methods 
**getDerivedStateFromError** or **componentDidCatch** becomes an error boundary

the static method **getDerivedStateFromError** method is used to **render a fallback UI** after an error is thrown and
**componentDidCatch** method is used to **log error info**

if there is an error,everything inside errorboundary is hidden and fallback ui is rendered

- Error boundaries are React Components that catch JS error in their child component tree,log these errors and display a fall-back UI
- A class component becomes an **error boundary** by defining either or both of **getDerivedStateFromError** and **componentDidCatch** lifecycle methods
- The placement of error boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem
- Error Boundary basically provides a way to gracefully handle error in application code