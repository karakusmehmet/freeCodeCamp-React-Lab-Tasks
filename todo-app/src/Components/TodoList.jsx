import React from 'react'
import Todo from './Todo.jsx'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((store) => store.todos.value);
  return (
    <div style={{width: "100%", marginTop:"50px"}}>
      {
        todos.map(({id,content}) => (<Todo key={id} id={id} content={content}/>))
      }
    </div>
  )
}

export default TodoList