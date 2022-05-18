import React from "react";
import useInput from "./CustomInputHook";

const CustomInputDemo = () =>{
    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')
    
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <span>First Name :</span>
                <input {...bindFirstName}/>
            </div>
            <div>
                <span>Last Name :</span>
                <input {...bindLastName}/>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default CustomInputDemo