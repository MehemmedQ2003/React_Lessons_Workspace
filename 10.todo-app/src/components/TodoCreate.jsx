import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoCreate = ({onCreateTodo}) => {

    const [newTodo, setNewTodo] = useState("");
    const clearInput = () => {
        setNewTodo("");
    }
    const createTodo = () => {
        if(!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 1000),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }
    return (
        <div className="todo-create">
            <input type="text" className="todo-input" placeholder="Create todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button className="todo-create-button" onClick={createTodo}>Create Todo</button>
        </div>
    );
};

export default TodoCreate;
