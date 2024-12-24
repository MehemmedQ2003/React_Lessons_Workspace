import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoInitialState, ToDoType } from '../types/Types';

const initialState:ToDoInitialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodoById: (state: ToDoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: ToDoType) => todo.id !== action.payload)];
        },
        updateTodo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
            state.todos = [...state.todos.map((todo: ToDoType) => todo.id !== action.payload.id ? todo : action.payload)];  
        }
    }
})


export const { createToDo, removeTodoById, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;