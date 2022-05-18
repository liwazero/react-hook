import React,{useState,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent(){
    const [age,setAge] = useState(0)
    const [salary,setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])


    // const incrementAge = () => {
    //     setAge(age+1)
    // }
    

    const incrementSalary = useCallback(
        () => {
            setSalary(salary+ 10000)
        },[salary]
    )

    // const incrementSalary =
    //     () => {
    //         setSalary(salary+ 10000)
    //     }

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent