import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import {removeTodoById,updateTodo} from '../redux/todoSlice'
import { useDispatch } from 'react-redux';

interface TodoProps {
  todoProps: TodoType
}

const Todo = ({todoProps} :TodoProps ) => {
  const {id,content} = todoProps;

  const [editable,setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content)
  const dispatch = useDispatch();

  const handleUpdate = () :void => {
      const payload : TodoType = {
        id : id,
        content: newTodo,
      }

      dispatch(updateTodo(payload))
      setEditable(false);
  }

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent: "space-between", border:"1px solid lightgray", padding: "16px", marginTop:"25px", borderRadius: "5px"}}>
        {editable ? <input style= {{border:"none", borderBottom:"1px solid lightgrey", outline:"none", width:"400px" }} value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => setNewTodo(e.target.value) }/> : <div>{content}</div>}
        <div className='icons'>
            <IoMdRemoveCircleOutline onClick={() => dispatch(removeTodoById(id))} style={{marginRight:"5px"}} />
            {editable ? <FaCheck onClick={handleUpdate}/>: <FaRegEdit onClick={() => setEditable(true)} /> }
            
        </div>
    </div>
  )
}

export default Todo