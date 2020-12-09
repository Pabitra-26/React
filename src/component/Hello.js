import React from 'react'

const Hello = () =>{
    return(
        React.createElement('div',
        {id: 'hello', className: 'dummyName'},
        React.createElement('h1',null,'Hello Pabbi!'))
    )
}

export default Hello