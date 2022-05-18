import React from 'react'

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }

    increment = () => {
        console.log('inside increment')
        this.setState(prevState=>({
            counter:prevState.counter+1
        }))
        // this.setState({
        //     counter:this.state.counter + 1
        // },()=>{
        //     console.log('callback',this.state.counter)
        // })
        
    }

    incrementFive = () => {
        console.log('inside incrementFive')
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        const {counter} = this.state
        return(
            <div>
                <div>you have clicked {counter} times</div>
                <button onClick={this.incrementFive}>you have clicked {counter} times</button>
            </div>
        )
    }
}

export default Counter