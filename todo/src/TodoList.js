import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./NewTodoForm";

function TodoList (){
    const [todos, setTodos] = useState([])
    
    
    const add = todoObj =>{
        setTodos(todos =>[...todos, todoObj])
    }

    const update =(id, updatedTask)=>{
        setTodos(todos => todos.map(
            todo => todo.id === id? {...todo, task:updatedTask} : todo
        ))
    }
    
    const remove = id =>{
        setTodos(todos => todos.filter(todo => todo.id !== id))

    }

    const todoComponent = todos.map(todo =>(
        <Todo 
        remove={remove}
        key = {todo.id}
        id={todo.id}
        task={todo.task}
        update={update}
        />
    ))

    return (
        <div>
            <TodoForm addTodo={add}/>
            <ul>{todoComponent}</ul>
        </div>
    )
}
export default TodoList