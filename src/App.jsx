import { useState } from 'react'
import './App.css'
import NewTodo from './Components/NewTodo'
import TodoList from './Components/TodoList'
import NewTodoForm from './Components/NewTodoForm'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <h1 className='text-5xl text-center'><span className='text-blue-500'>TODO</span> APP</h1>
      <div className=''>
        <div className='m-5'></div>
        <NewTodoForm addTodo={setTodos} />
        <div className='scroll-smooth'>
          <TodoList todos = { todos } updateTodo = { setTodos } />
        </div>
      </div>
    </>
  )
}

export default App
