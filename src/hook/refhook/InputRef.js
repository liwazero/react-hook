import React,{useRef,useEffect} from 'react'

const InputRef = () => {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input ref={inputRef}/>
        </div>
    )
}

export default InputRef