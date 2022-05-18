import React, { useState } from "react";
const ParentOne = ({children,newCount}) => {
    const [count,setCount] = useState(0)
    console.log('ParentOne Render')

    const increment = () => {
        setCount(count+1)
    }
    return(
        <div>
            <p>来自GrandParentOne {newCount}</p>
            <button onClick={increment}>{count}</button>
            {children}
        </div>
    )
}

export default ParentOne