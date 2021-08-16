import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    render() {
        {/*IF/ELSE*/}

        // if(this.state.isLoggedIn){
        //     return(<div>Welcome Sharath</div>)
        // }else{
        //     return(<div>Welcome Guest</div>)
        // }
        
        {/*Element variables*/}

        // let message
        // if(this.state.isLoggedIn){
        //     message =<div>Welcome Sharath</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
       
        {/* Ternary conditional operator */}
       
        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Sharath 🚀</div>
        //     ): (
        //         <div>Welcome Guest 🙄</div>
        //     ) 
        // )

        {/* Short circuit operator */}
        return(this.state.isLoggedIn && <div>Welcome Sharath 🎢</div>)
    }
}

export default UserGreeting
