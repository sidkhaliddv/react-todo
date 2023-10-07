import Todo from "./Todo";

const TodoList = ({ todos, updateTodo }) => {
	console.log(todos)
	return (
		<>
			<div className="my-[80px]">
				{ todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />
				}) }
			</div>
		</>
	)
}

export default TodoList;
