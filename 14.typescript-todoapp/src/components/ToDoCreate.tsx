import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { createToDo } from "../redux/todoSlice";
import { ToDoType } from "../types/Types";

const ToDoCreate = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');
    const handleCreateToDo = () => {
        if(newTodo.trim().length == 0){
            alert('Please enter a todo');
            return;
        }
        
        const payload: ToDoType = {
            id: Math.floor(Math.random() * 999),
            content: newTodo
        }
        dispatch(createToDo(payload));
        setNewTodo('');
    }

    return (
        <div className='todo-create'>
            <input placeholder='Enter your todo' type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
            <button onClick={handleCreateToDo} className='todo-create-button'>Create</button>
        </div>
    )
}

export default ToDoCreate
