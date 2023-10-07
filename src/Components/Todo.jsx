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
		<div className="flex justify-center items-center border-collapse mb-5">
			<div className="flex w-full md:w-4/6 border justify-center items-center h-[65px] bg-sky-500/5 shadow-lg rounded">
				<p className="w-5/6 md:w-5/6 p-5">{ todo.task }</p>
				<div className="w-1/6 flex">
					<button className="w-full h-[65px] bg-rose-500" onClick={(e)=>{deleteTodo(todo.id)}}>Delete</button>
				</div>
			</div>
		</div>
	)
};

export default Todo;
