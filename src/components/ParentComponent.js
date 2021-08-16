import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }
    greetParent(childName){
        // alert('Hello '+this.state.parentName);
        alert(`Hello ${this.state.parentName} from ${childName}`); //template literal 
    }
    render() {
        return (
            <div>
                {/* <ChildComponent/> */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
