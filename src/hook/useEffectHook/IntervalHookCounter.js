import React,{useState,useEffect} from "react";

const IntervalHookCounter = () => {
    const [counter,setCount] = useState(0)

    const tick = () => {
        setCount(prevcount => prevcount+1)
    }
    useEffect(()=>{
        const interval = setInterval(function(){
            console.log('run interval')
            tick()
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])

    return(
        <div>
            {counter}
        </div>
    )
}

export default IntervalHookCounter