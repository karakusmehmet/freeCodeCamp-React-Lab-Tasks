import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../CSS/App.css'
import { useDispatch} from 'react-redux';

import {deleteTodo, updateTodo} from '../redux/todoSlice.jsx'

const Todo = ({id,content}) => {

  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false)
  const [newTodo, setNewTodo] = useState(content);

  const handleUptade = () => {
    const requested = {
      id,
      content: newTodo,
    }
    dispatch(updateTodo(requested));
    setEditable(false);
  }
  
  return (
    <div style={{display: "flex", gap: "30px", justifyContent:"space-between", alignItems:"center", border:"1px solid lightgrey", padding:"10px", marginTop: "10px"}}>
        <div>
          {
          editable ? 
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value) }
            className='todo-input'
            type="text" />  : content
          }
        </div>
        <div>
            
          <IoIosRemoveCircle className='todo-icons' onClick={() => dispatch(deleteTodo(id)) }/>
            {
              editable ? <FaCheck className='todo-icons' onClick={handleUptade} /> 
              : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
            }
        </div>
    </div>
  )
}

export default Todo