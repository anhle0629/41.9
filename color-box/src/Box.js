import React from "react";

function Box({
    id,
    handleRemove,
    backgroundColor="navy",
    height=4,
    width=6
}){
    const remove = ()=>handleRemove(id)
    return(
        <div>
        <div
            style={{
                backgroundColor, 
                height:`${height}em`, 
                width: `${width}`
            }}
        ></div>
        <button onClick={remove}>Remove the box!</button>            
        </div>

    )
}



export default Box