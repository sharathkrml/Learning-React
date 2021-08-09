//simple functional component
//JSX version
import React from 'react'
export const JSXHello = () =>{
    return(
        <div className='Dummy'>
            <h1>
                Hello Sharath
            </h1>
        </div>
    )
}
export const WoJsxHello = () =>{
    return React.createElement('div',{id:'Hello',className:'Dummy'},React.createElement('h1',null,'hello Sharath 😃'))
}