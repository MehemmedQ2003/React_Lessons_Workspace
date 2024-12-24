/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";


const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }
    return (
        <div className="todo-container" key={id}>
            <div className="todo-content">
                {editable ? (
                    <input
                        type="text"
                        className="todo-input-edit"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                ) : (
                    content
                )}
            </div>
            <div className="todo-icons">
                <IoIosRemoveCircle
                    className="todo-icon todo-remove-icon"
                    onClick={removeTodo}
                />
                {editable ? (
                    <FaCheckCircle className="todo-icon" onClick={updateTodo} />
                ) : (
                    <FaEdit className="todo-icon" onClick={() => setEditable(true)} />
                )}
            </div>
        </div>

    )
}

export default Todo
