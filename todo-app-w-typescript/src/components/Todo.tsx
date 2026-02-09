import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';

interface TodoProps {
  todoProps: TodoType
}
const Todo = ({todoProps} :TodoProps ) => {
  const {content} = todoProps;
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent: "space-between", border:"1px solid lightgray", padding: "16px", marginTop:"25px", borderRadius: "5px"}}>
        <div>{content}</div>
        <div className='icons'>
            <IoMdRemoveCircleOutline style={{marginRight:"5px"}} />
            <FaRegEdit />
            <FaCheck></FaCheck>
        </div>
    </div>
  )
}

export default Todo