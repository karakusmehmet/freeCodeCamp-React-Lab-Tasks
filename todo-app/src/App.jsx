import './CSS/App.css'
import TodoCreate from './Components/TodoCreate.jsx'
import TodoList from './Components/TodoList.jsx'

function App() {

  return (
    <div className='App' >
      <div className='main'>
        <TodoCreate/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App
