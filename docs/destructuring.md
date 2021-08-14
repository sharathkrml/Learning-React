## DeStructuring
used to unpack values from arrays or properties from objects to distinct variables

#### destructuring props and state improve code readability

### There are 2 ways to destructure props oin functional component
1. destructure in function parameter itself
    ```JSXHello = ({name,heroName}) =>{}```
1. destructuring in the function body
    ```const {name,heroName} =props```

### in class component
1. destructuring in render method
    ```render(){const {name,heroName} = this.props``` 
    or
    ```const {heroName,name} = this.props```