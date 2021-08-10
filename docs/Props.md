Components are reusable

we have JSXHello functional component ,Lets control name to greet

Props -> optional input that components can accept

To specity props for a component ,we specify them as attributes

properties for sure -> pass as attribute
properties not sure/to pass dynamic html content -> pass it in between component tag & in component definiton ,render using props.children


we have Welcome class component in Welcome.js

props in class component can be accessed by this.props

props are immutable,we cannot change passed props value in definition(read only)