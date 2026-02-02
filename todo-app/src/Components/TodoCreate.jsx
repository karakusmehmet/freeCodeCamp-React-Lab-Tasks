import React, { useState } from 'react'
import '../CSS/App.css'
import { useDispatch } from 'react-redux';
import {createTodo} from '../redux/todoSlice.jsx'

const TodoCreate = () => {

  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const clearInput = () => {
    setNewTodo("")
  }

  const createTodos = () => {
    if(!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    }
    dispatch(createTodo(request))
    //onCreateTodo(request);
    clearInput();
  }
  return (
    <div className='todo-create'>
        <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value) }
        className='todo-input'
        type="text"
        placeholder='Todo giriniz'
        />
        <button onClick={createTodos} className='todo-create-button'>Todo Olustur</button>
    </div>
  )
}

export default TodoCreate