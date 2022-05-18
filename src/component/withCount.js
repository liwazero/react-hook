import React from 'react'

const withCounter = WrappedComponnet => {
    class WithCounter extends React.Component{
        constructor(){
            super()
            this.state = {
                counter:0
            }
        }

        incresment = () => {
            this.setState(prevState => {return{counter:prevState.counter+1}})
        }

        render(){
            const {state} = this
            return <WrappedComponnet {...state} incresment={this.incresment}/>
        }
    }
    return WithCounter
}

export default withCounter