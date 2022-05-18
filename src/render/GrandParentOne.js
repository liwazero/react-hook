import React, { useState } from "react";
import ParentOne from "./ParentOne";
import { ChildOne } from "./childOne";

const GrandParentOne = () => {
    const[count,setCount] = useState(0)
     console.log('GrandParentOne Render')

     const increment = () => {
         setCount(count+5)
     }
     return(
         <div>
             <button onClick={increment}>{count}</button>
             <ParentOne newCount={count}>
                 <ChildOne/>
             </ParentOne>
         </div>
     )

}

export default GrandParentOne