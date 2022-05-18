import React,{useState,useEffect} from 'react'

const TitleCounter = () => {
    const [counter,setCounter] = useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
        console.log('re-render title')
        document.title = `you have clicked ${counter}`
    },[counter])

    useEffect(()=>{
        console.log('2nd useEffect re-render')
    },[name])
    return(
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCounter(counter+1)}>you have clicked {counter}</button>
        </div>
    )
}

export default TitleCounter
