import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class PureParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sharath'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sharath'
            })
        },2000)
    }
    render() {
        console.log(" 🔦 🔦 🔦 🔦 🔦 🔦 Parent Component 🔦 🔦 🔦 🔦 🔦 🔦");
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>

            </div>
        )
    }
}

export default PureParentComp