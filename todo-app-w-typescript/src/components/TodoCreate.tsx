import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

const TodoCreate = () => {
  const [newTodo, setNewTodo] = useState<string>("")
  const dispatch = useDispatch();
  const handleCreateTodo = () : void => {

    if(newTodo.trim().length === 0) {
      alert("Todo giriniz")
      return;
    }
    const payload : TodoType = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    }

    dispatch(createTodo(payload));
    setNewTodo('');

  }
  return (
    <div className='todo-create'>
        <input value={newTodo} placeholder='Todo giriniz..' className='todo-input' type="text" onChange={(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => setNewTodo(e.target.value)} />
        <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate