//simple functional component
//JSX version
import React from 'react'
export const JSXHello = ({name,heroName}) =>{
    return(
        <div className='Dummy'>
            <h1>
                Hello {name} a.k.a {heroName} ⛑️
            </h1>
        </div>
    )
}

export const JSXHello2 = props =>{
    const {name,heroName} =props
    return(
        <div className='Dummy'>
            <h1>
                Hello {name} a.k.a {heroName} ⏪
            </h1>
        </div>
    )
}
export default JSXHello2;