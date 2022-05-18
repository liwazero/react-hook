import React,{useReducer} from 'react'
//多个reducer,维护独立的状态,互不影响
const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state        
    }
}

function CounterThree(){

    const [count1,dispatch1] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)

    return(
        <div>
            <div>
                <h1>Count1- {count1}</h1>
                <button onClick={()=>dispatch1('increment')}>increment</button>
                <button onClick={()=>dispatch1('decrement')}>decrement</button>
                <button onClick={()=>dispatch1('reset')}>reset</button>
            </div>

            <div>
                <h1>Count1- {count2}</h1>
                <button onClick={()=>dispatch2('increment')}>increment</button>
                <button onClick={()=>dispatch2('decrement')}>decrement</button>
                <button onClick={()=>dispatch2('reset')}>reset</button>
            </div>      
        </div>
    )
}

export default CounterThree