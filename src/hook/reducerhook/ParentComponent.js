import React,{useReducer,createContext} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentD from './ComponentD'
import HookDetail from '../../render/HookDetail'
import AsyncList from "../../render/AsyncList"


const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state        
            
    }
}

export const CountContext = createContext()

function ParentComponent(){
    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <CountContext.Provider 
            value={{countState:count,countDispath:dispatch}}
        >
                {/* <h1>Global Count ==== {count} </h1>
            <div>
                <ComponentA/>
                <ComponentB/>
                <ComponentD/>
            </div> */}
            <AsyncList/>  
        </CountContext.Provider>

    )
}

export default ParentComponent