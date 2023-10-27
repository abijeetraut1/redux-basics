import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice";


export default function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <div>
        <div>My Todos</div>
        {todos && todos.map((todo) => (
            <li key={todo.id}> 
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
        ))}
    </div>
  )
}
