import React,{useContext} from 'react'
import { CountContext } from './ParentComponent'
function ComponentF(){

    const context = useContext(CountContext)
    const {countState,countDispath} = context
    return(
        <div>
            <div>ComponentF ===== {countState}</div>
            <button onClick={()=>countDispath('increment')}>increment</button>
            <button onClick={()=>countDispath('decrement')}>decrement</button>
            <button onClick={()=>countDispath('reset')}>reset</button>
        </div>
    )
}

export default ComponentF