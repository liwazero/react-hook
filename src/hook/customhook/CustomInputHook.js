import {useState} from 'react'

const useInput = (intialValue) => {
    const [value,setInput] = useState(intialValue)
    const reset = () => {
        setInput(intialValue)
    }

    const bind = {
        value,
        onChange:e=>{
            setInput(e.target.value)
        }
    }

    return [value,bind,reset]
}

export default useInput