import Todo from "./Todo";

const TodoList = ({ todos, updateTodo }) => {
	console.log(todos)
	return (
		<>
			{ todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />
			}) }
		</>
	)
}

export default TodoList;
