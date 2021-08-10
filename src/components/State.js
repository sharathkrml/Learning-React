import React,{Component} from 'react';
//we need to change Welcome to Thank you in a button click
//cannot use props as it cannot be changed once fixed
class Message extends Component{
    constructor(){
        super();
        this.state={
            message :'welcome 💖'
        }
    }
    changeMessage(){
        this.setState({
            message:'You Just Hit Me 😡'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Hit me</button>
        </div>)
    }
}
export default Message