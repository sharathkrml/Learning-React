import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sharath ✊"
        }
        console.log('1.LifeCycleB constructor 👊')
    }


    static getDerivedStateFromProps(prop,state){
        console.log('2.LifeCycleB getDerivedStateFromProps 🚀');
        return null
    }
    componentDidMount(){
        console.log('4.LifeCycleB componentDidMount 🐓')
    }
    render() {
        console.log('3.LifeCycleB render 🌹')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
