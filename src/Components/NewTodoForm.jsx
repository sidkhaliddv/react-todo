import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';

const TextInput = (({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<input type="text" {...field}/>
			{ meta.touched && meta.error ? (
				<div>{ meta.error }</div>
			) : null }
		</>
	)
})

const NewTodoForm = ({ addTodo }) => {
	return (
		<>
			<Formik
				initialValues={{
					task: ''
				}}
				validationSchema={
					Yup.object({
						task: Yup.string()
										 .max(100, 'Max 100 characters are allowed!')
										 .min(5, 'Minimum 5 character should be present')
										 .required('Required')
					})
				}
				onSubmit={(values, { setSubmitting })=>{
					setSubmitting(true);
					addTodo((todos)=>{
						return [...todos, {
							id: crypto.randomUUID(),
							task: values.task,
							completed: false,
						}]
					})
					setSubmitting(false);
				}}>
					<Form>
						<TextInput
							name="task"
							type="text"
							placeholder="New task"
						/>
						<button type='submit'>Submit</button>
					</Form>
			</Formik>
		</>
	)
}

export default NewTodoForm;
