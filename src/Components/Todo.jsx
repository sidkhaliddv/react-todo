const Todo = ({ todo, updateTodo }) => {
	const toggleTodo = (id) => {
		updateTodo((todos)=>{
			return todos.map(todo => todo.id === id ? 
				{ ...todo, completed: !todo.completed } : todo )
		})
	}

	const deleteTodo = (id)=> {
		updateTodo((todos)=>{
			return todos.filter((todo => todo.id != id ))
		})
	}

	return (
		<div>
			<p>{ todo.task }</p>
			<button onClick={(e)=>{deleteTodo(todo.id)}}>Delete</button>
			<input value = {todo.completed} type = "checkbox" onChange = {()=>{toggleTodo(todo.id)}} />
		</div>
	)
};

export default Todo;
