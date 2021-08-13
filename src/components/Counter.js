import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count :0
        }
    }
    increment(){
        //this.state.count = this.state.count+1;//can change state,but do not rerender ui
      //  this.setState({
       //     count:this.state.count + 1
        //},()=>{
         //   console.log('callback 🚗',this.state.count)
       // })

       //whenever you have to update state,based on previous state,We need to pass function as an argument to setState method insted of an object
        this.setState((prevState,props)=>({
            count : prevState.count + 1
        }),()=>{
            console.log('callback 🔴=',this.state.count)
        })
        console.log(this.state.count); 
        //setState is asynchronous,so it will not give count value after setState
        //To do so,we need to add callback function to setState
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>
                Count  - {this.state.count}
                </div>
                <button onClick={()=>{this.incrementFive()}}>
                        Increment
                </button>
            </div>
        )
    }
}

export default Counter
