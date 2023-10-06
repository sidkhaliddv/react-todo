const TodoList = ({ todos }) => {
	console.log(todos)
	return (
		<>
			{ todos.map((todo) => {
				return <div key={ todo.id }>{ todo.task }</div>
			}) }
		</>
	)
}

export default TodoList;
