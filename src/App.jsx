import { useState } from 'react'
import './App.css'
import NewTodo from './Components/NewTodo'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <NewTodo setTodos={ setTodos } todos={ todos }/>
      <TodoList todos = { todos } />
    </>
  )
}

export default App
