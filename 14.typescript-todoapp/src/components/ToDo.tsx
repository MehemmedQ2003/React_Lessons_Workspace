import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { ToDoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import React, { useState } from "react";

interface ToDoProps {
    todoProps: ToDoType
}

const ToDo = ({todoProps}: ToDoProps) => {
    const {id, content} = todoProps;
    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const dispatch = useDispatch();
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload = {
            id: id,
            content: newTodo
        };
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div className="todo" key={id}>
            {editable ? 
                <input type='text' 
                value={newTodo} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value) } /> 
                : content}
            <div className="icons">
                <IoMdRemoveCircleOutline className="icon" onClick={handleRemoveTodo}/>
                {editable ? <FaRegCheckCircle onClick={handleUpdateTodo} className="icon"/> : <MdEdit onClick={() => setEditable(true)} className="icon"/>}
            </div>
        </div>
    )
}

export default ToDo
