import React,{useReducer} from 'react'


const initialState = {
    countOne:0,
    countTwo:3
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment1':
            return {...state,countOne:state.countOne+action.value}
        case 'decrement1':
            return {...state,countOne:state.countOne - action.value}
        case 'increment2':
            return {...state,countTwo:state.countTwo + action.value}
        case 'decrement2':
            return {...state,countTwo:state.countTwo - action.value}
        case 'reset1':
            return {...state,countOne:initialState.countOne}
        case 'reset2':
            return {...state,countTwo:initialState.countTwo}
        default:
            return state                     
    }
}
function CounterTwo(){
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <div>
            <div>
                <h1>countone-{state.countOne}</h1>
                <button onClick={()=>dispatch({type:'increment1',value:3})}>increment3</button>
                <button onClick={()=>dispatch({type:'decrement1',value:3})}>decrement3</button>
                <button onClick={()=>dispatch({type:'reset1'})}>reset</button>
            </div>
            <div>
            <h1>counttwo-{state.countTwo}</h1>
                <button onClick={()=>dispatch({type:'increment2',value:5})}>increment5</button>
                <button onClick={()=>dispatch({type:'decrement2',value:5})}>decrement5</button>
                <button onClick={()=>dispatch({type:'reset2'})}>reset</button>
            </div>

        </div>
    )
}

export default CounterTwo