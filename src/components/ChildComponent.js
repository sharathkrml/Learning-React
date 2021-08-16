import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* Passing parameters to greetHandler */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent 🛤️</button>
        </div>
    )
}

export default ChildComponent
