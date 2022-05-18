import React from 'react'
import withCounter from './withCount'

class HoverCounter extends React.Component{
    render(){
        const {incresment,counter} = this.props
        return <button onClick={incresment}>button clicked {counter} times</button>
    }
}

export default withCounter(HoverCounter)