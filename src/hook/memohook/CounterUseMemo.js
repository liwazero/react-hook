import React,{useState,useMemo} from 'react'

const CounterUseMemo = () =>{
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(prevCount => prevCount+1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(prevCount => prevCount+1)
    }


    const isEven = useMemo(() => {
        let i = 0
        while(i < 200000000)i++
        return counterTwo%2 === 0
    },[counterTwo])

    // const isEven = () => {
    //     let i = 0
    //     while(i < 2000000000)i++
    //     return counterTwo%2 === 0
    // }

    return (
        <div>
            <div>counterOne - {counterOne}</div>
            <div>counterTwo - {counterTwo} - {isEven ? 'Even' : 'odd'}</div>
            <button onClick={incrementCounterOne}>incrementOne</button>
            <button onClick={incrementCounterTwo}>incrementTwo</button>
        </div>
    )
}

export default CounterUseMemo