import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sharath ✊"
        }
        console.log('1.LifeCycleA constructor 👊')
    }


    static getDerivedStateFromProps(prop,state){
        console.log('2.LifeCycleA getDerivedStateFromProps 🚀');
        return null
    }
    componentDidMount(){
        console.log('4.LifeCycleA componentDidMount 🐓')
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate 🚣");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate 🏃");
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate 🎽");
    }

    changeState = () =>{
        this.setState({
            name:'variety sanam'
        })
    }

    render() {
        console.log('3.LifeCycleA render 🌹')
        return (
            <div>
                <div>See order of execution</div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
