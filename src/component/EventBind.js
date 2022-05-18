import {Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message:'hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'goodbye'
        })
    }

    render(){
        const {message} = this.state
        return(
            <div>
                <div>{message}</div>
                <button onClick={this.clickHandler}>click</button>
            </div>

        )
    }
}

export default EventBind