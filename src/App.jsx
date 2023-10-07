import { useState } from 'react'
import './App.css'
import NewTodo from './Components/NewTodo'
import TodoList from './Components/TodoList'
import NewTodoForm from './Components/NewTodoForm'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <div className=''>
        <div className='m-5'></div>
        <NewTodoForm addTodo={setTodos} />
        <TodoList todos = { todos } updateTodo = { setTodos } />
      </div>
    </>
  )
}

export default App
