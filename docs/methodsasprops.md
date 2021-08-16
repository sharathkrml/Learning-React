Data can be passed to children component via props
in parent
      <Welcome name="Tony Stark" heroName="Iron Man"/>
in children
class Welcome extends Component{
    render(){
        const {heroName,name} = this.props
        return (<h1 className={name}>Welcome  {name} aka {heroName} 😡</h1>)
    }
}

What we want to achieve:
when we click the button in child component,it must evoke method defined in parent component
ie,Child component calls the parent component method
Achieved using props

- In the parent component,define the method
- In the child component tag,pass the method as prop
- In the child component,access the method using props object
    - To pass a parameter,use arrow function syntax