import { useSelector } from "react-redux"
import ToDo from "./ToDo"
import { RootState } from "../redux/store";
import { ToDoType } from "../types/Types";

const ToDoList = () => {
    const todos = useSelector((state: RootState) => state.todo.todos);
    return (
        <div>
            {todos && todos.map((todo: ToDoType) => {
                return <ToDo key={todo.id} todoProps={todo}/>
            })}
        </div>
    )
}

export default ToDoList
