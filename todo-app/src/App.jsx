import { useState } from 'react'
import './CSS/App.css'
import TodoCreate from './Components/TodoCreate.jsx'
import TodoList from './Components/TodoList.jsx'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos(prev => [...prev, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id) return todo;

      return newTodo;
    })

    setTodos(updatedTodos);
  }


  return (
    <div className='App' >
      <div className='main'>
        <TodoCreate onCreateTodo = {createTodo}/>
        <TodoList todos = {todos} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
      </div>
    </div>
  )
}

export default App
