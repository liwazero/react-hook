import React,{useState,useEffect} from 'react'

const HookMouse = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const updatePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('called useEffect')
        window.addEventListener('mousemove',updatePosition)
        return ()=>{
            console.log('Component unmounting code')
            window.removeEventListener('mousemove',updatePosition)
        }
    },[])

    return(
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse