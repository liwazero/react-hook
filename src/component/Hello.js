import React from 'react'

const Hello = () =>{
    return React.createElement(
        'div',
        {
            id:'hello',
            className:'dumyClass',       
        },
        React.createElement(
            'h1',
            null,
            'hello spy'
        )
    )
}

export default Hello