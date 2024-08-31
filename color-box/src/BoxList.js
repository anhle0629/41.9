import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList () {
    const [boxes, setboxes] = useState([])
    const add = boxObj => {
        setboxes(boxes => [...boxes, boxObj])
    }

    const remove = id =>{
        setboxes(boxes => boxes.filter(box=> box.id !== id))
    }


    const boxComponents = boxes.map(box =>(
        <Box 
            key={box.id}
            box={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ))
    return(
        <div>
            <NewBoxForm addBox={add}/>
            {boxComponents}
        </div>
    )
}

export default BoxList