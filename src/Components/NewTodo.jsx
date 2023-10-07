import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

const NewTodo = ({ setTodos, todos }) => {
	const formik = useFormik({
		initialValues: {
			task: ''
		},
		validationSchema: Yup.object({
			task: Yup.string()
									.max('100', 'Max 100 characters are allowed')
									.min('5', 'Minimum 5 characters should be present')
									.required('Required')
		}),
		onSubmit: (values) => {
			values = {...values, id: crypto.randomUUID() }
			setTodos((state)=>[...state, values]);
			console.log(values);
		}
	});

	return (
		<>
			
			<form onSubmit={formik.handleSubmit}>
				<input type="text" name="" id="task" placeholder="New Todo"
					{ ...formik.getFieldProps('task') } />
				{ formik.touched.task && formik.errors.task ? (
					<span>{ formik.errors.task }</span>
					)	: null }
				<button type="submit">Add</button>
			</form>
		</>
	)
}

export default NewTodo;
