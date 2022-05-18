import React,{useMemo,useState,useCallback,useRef,useEffect} from "react"

const HookDetail = () => {
    debugger
    const [name,setName] = useState("test useState1")
    useState("test useState2")


    const handleClick = useCallback(()=>{
        setName("test useCallback")
    },[1])

    useEffect(()=>{
        console.log("test useEffect")
    })

    useRef(1)

    useMemo(()=>{
        return "test useMemo"
    })

    return(
        <div>
            test react hooks
            debug
            <div>{name}</div>
            <button onClick={handleClick}>count++</button>
        </div>
    )
}

export default HookDetail