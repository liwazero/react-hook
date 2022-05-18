import React,{useState} from 'react'

function HookCounter(){
    const [counter,setCount] = useState(0)
    
    const incrementCountFive = () => {
        for(let i = 0;i < 5;i++){
            setCount(prevState => prevState+1)
        }
    }

    return(
        <div>
            <button onClick={incrementCountFive}>Count {counter}</button>
        </div>
    )
}

export default HookCounter
