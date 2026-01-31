import React from 'react'
import Todo from './Todo.jsx'

const TodoList = ({todos,deleteTodo,updateTodo}) => {
  return (
    <div style={{width: "100%", marginTop:"50px"}}>
      {
        todos.map(({id,content}) => (<Todo key={id} id = {id} content = {content} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>))
      }
    </div>
  )
}

export default TodoList