import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { TodoType } from '../types/Types'

const TodoList = () => {
  const {todos} = useSelector((store: RootState) => store.todo)
  console.log(todos)
  return (
    <div>
      {todos && todos.map((todo:TodoType) => <Todo key={todo.id} todoProps={todo}/>)}
    </div>
  )
}

export default TodoList