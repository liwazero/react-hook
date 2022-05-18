import React,{} from 'react'

function HookCounterThree(){
    const [name,setName] = useState({firstName:'',lastName:''})

    return(
        <form>
            <input value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
            <input value={name.lastName} onChange={(e)=> setName({...name,lastName:e.target.value})}/>
            <div>firstName is {name.firstName}</div>
            <div>lastName is {name.lastName}</div>
        </form>
    )
}

export default HookCounterThree