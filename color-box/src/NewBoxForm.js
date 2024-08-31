import React, {useState} from "react";
import {v4 as uuid} from 'uuid'

const NewBoxForm = ({addBox})=>{
    const initialState = {
        backgroundColor:"",
        height:"",
        width:""
    } 

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        addBox({...formData, id: uuid()})
        setFormData(initialState)
    }

    const handleChange= (evt)=>{
        const {name, value} = evt.target
        setFormData(fdata =>({
            ...fdata, 
            [name]: value
        }))
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">backgroundColor:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                type="type"
                value={formData.backgroundColor}
                onChange={handleChange}
            ></input>
            <label htmlFor="height">height:</label>
            <input
                id="height"
                name="height"
                type="text"
                value={formData.height}
                onChange={handleChange}
            ></input>
            <label htmlFor="width">width:</label>
            <input
                id="text"
                name="width"
                type="number"
                value={formData.width}
                onChange={handleChange}
            ></input>

            <button>Add New Box</button>
        </form>
    )
}

export default NewBoxForm