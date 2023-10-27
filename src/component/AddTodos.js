import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from "../features/todo/todoSlice";

export default function AddTodos() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    // useDispatch use reducer to save the value in store  

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" name="" id="" onChange={(el) => {
                setInput(el.target.value)
            }}/>
            <button onClick={() => addTodoHandler}>Submit</button>
        </form>
    </div>
  )
}
