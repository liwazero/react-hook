import React from 'react'
import withCounter from './withCount'

const ClickCCounter = (props) => {
    const {counter,incresment} = props
    return <div onMouseOver={incresment}>hovered {counter} times</div>
}

export default withCounter(ClickCCounter)