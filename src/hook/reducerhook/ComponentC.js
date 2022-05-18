import React,{useContext} from 'react'
import { CountContext } from './ParentComponent'


function ComponentC(){
    const context = useContext(CountContext)
    return(
        <div>
            <div>ComponentC ===== {context.countState}</div>
            <button onClick={()=>context.countDispath('increment')}>increment</button>
            <button onClick={()=>context.countDispath('decrement')}>decrement</button>
            <button onClick={()=>context.countDispath('reset')}>reset</button>
        </div>
    )
}

export default ComponentC