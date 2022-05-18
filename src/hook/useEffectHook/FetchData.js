import React,{useState,useEffect} from "react";
import axios from "axios";

const FetchData = () =>{
    const [post,setPost] = useState({})
    const [idFormButtonClick,setIdFormButtonClick] = useState(1)
    const [id,setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${idFormButtonClick}`)
        .then(res=>{
            console.log(res.data)
            const {data} = res
            setPost(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFormButtonClick])

    const handleClick = () => {
        setIdFormButtonClick(id)
    }
    return(
        <div>
            <input value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleClick}>fetch data</button>
            <div>get data from ajax:{post.title}</div>
        </div>
    )
}

export default FetchData