import React, {useState} from "react";
import {v4 as uuid} from 'uuid'


const TodoForm = (addToDo)=>{
    const initalState = ""
    const [task, setTask] = useState(initalState)


    const handleSubmit = evt =>{
        evt.preventDefault()
        addToDo({task, id:uuid() })
        setTask(initalState)
    }

    const handleChange = (evt)=>{
        setTask(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
            id="task"
            name="task"
            type="text"
            value={task}
            onChange={handleChange}
            ></input>

            <button>Add to do!</button>
        </form>
    )
}







export default TodoForm