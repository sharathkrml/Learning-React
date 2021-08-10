//simple functional component
//JSX version
import React from 'react'
export const JSXHello = (props) =>{
    console.log(props)
    return(
        <div className='Dummy'>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
export default JSXHello;