//render props 是在react组件之间使用一种值为函数的prop共享代码的简单技术
/**
 * render prop是一个用于告知组件需要渲染什么内容的函数prop
 * 
 */


//这里鼠标移动还用到lodash的节流函数,优化鼠标移动事件函数频繁调用的问题
import React,{useState} from "react";
import { throttle } from "lodash";


const Square = ({mouse}) => {
    return(
        <div style={{position:'absolute',left:mouse.x,top:mouse.y}}>
        <span style={{width:'50px',height:'50px',background:'red',display:'block'}}>12312</span>
    </div>
    )
}  

const Mouse = (props) => {
    let initMouse = {
        x:0,
        y:0
    }
    const [mouse,setMouse] = useState(initMouse)

    const handleMouseMove = (event) => {
        console.log('moveing',event.clientX)
        setMouse({...mouse,
          x: event.clientX,
          y: event.clientY
        });
      }
      console.log(props)
    return(
        <div style={{ height: '100vh' }} onMouseMove={throttle(handleMouseMove,1000)}>
        {props.children(mouse)}
      </div>
    )
}


  const MouseTracker = () => {
      return(
        <div>
        <h1>移动鼠标!</h1>
        <Mouse>{(mouse)=>{
            return <Square mouse={mouse} />
        }}</Mouse>

        {/* <Mouse render={mouse=>{
            return(<p style={{width:'100px',height:'100px'}}>鼠标的位置是{mouse.x} {mouse.y}</p>)
        }}/> */}
      </div>
      )
  }

export default MouseTracker