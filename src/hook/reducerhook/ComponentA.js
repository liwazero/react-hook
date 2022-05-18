import React,{useContext,useEffect} from 'react'
import { CountContext } from './ParentComponent'
function ComponentA(){
    const context = useContext(CountContext)
    useEffect(()=>{
     console.log('执行==========')   
    })
    return(
        <div>
            <div>ComponentA====={context.countState}</div>
            <button onClick={() => context.countDispath('increment')}>increment</button>
            <button onClick={() =>context.countDispath('decrement')}>decrement</button>
            <button onClick={() => context.countDispath('reset')}>reset</button>
        </div>
    )
}

export default ComponentA