const add = (first,...rest) => {
    let result = first
    rest.forEach((item)=>{ 
        result+= item
    })
    return result
}

export {add}