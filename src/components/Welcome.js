import React,{Component} from 'react';
class Welcome extends Component{
    render(){
        const {heroName,name} = this.props
        //const {state1,state2} = this.state
        return (<h1 className={name}>Welcome  {name} aka {heroName} 😡</h1>)
    }
}
export default Welcome