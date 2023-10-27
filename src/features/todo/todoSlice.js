import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todo: [{id: 1, text: "hello world"}]
// };

export const todoSlice = createSlice({
    name: "todo",
    initialState: { todos: [] },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },       
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer; // this step is because is to check wheter the funcion is defined or not in the reducer

/*
    reduces takes properties and function
    reducers parameter always take (state, action)
    where as state has the value and action defines the sort of action to need to be performed eg: add, subtract     
*/ 