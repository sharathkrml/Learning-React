PROPS vs STATE

|                        Props                                 |                         state                           |
|--------------------------------------------------------------|---------------------------------------------------------|
| props get passed to component                                | state is managed by component                           |
| analogy-function parameters                                  | variables declared in function body                     |
| props are immutable(parent usually passes props to children) | managed within component,component can change the state |
| props ->functional components                                | useState Hook in functional component                   |
| this.props -> class components                               | this.state in class component                           |


- State is an object that is privately maintained inside a component
- State can influence what is rendered in the Browser
- State can be changed within Component