this keyword is undefined in default eventhandler

`<button onClick={this.clickHandler}>Click</button>`
`clickHandler(){console.log(this) //undefined}`

ways to bind this to eventhandler
1.  Binding in the render method 
    `<button onClick={this.clickHandler.bind(this)}>Click</button>`
    every update in state cause component rerender,it will affect big  applications with nested children components
2.  Using arrow function in render method
    `<button onClick={()=>this.clickHandler()}>Click</button>`
    every update in state cause component rerender,it will affect big  applications with nested children components
    
    BOTH has performance implications
3.  binding event handler in constructor

    <code>constructor(props) {
        super(props)
    
        this.state = {
             message:'hello 🚀'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }</code>

    <button onClick={this.clickHandler}>Click</button>
    because binding happens once in constructor,this approach is better
4.  arrow function as class property or changing change the way ew define function
    <code>clickHandler =()=>{
        this.setState({
            message:'good Byee 🐓'
        })
    }</code>


    REACT documentation recommends 3 or 4
    3 is the best option