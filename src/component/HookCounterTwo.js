import React,{useState} from 'react'

function HookCounterTwo(){
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    const incrementCountFive = () => {
        for(let i = 0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(prev => prev + 1)}>incrementCount</button>
            <button onClick={()=>setCount(prev => prev - 1)}>decrementCount</button>
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button onClick={incrementCountFive}>incrementCountFive</button>
        </div>
    )
}

export default HookCounterTwo