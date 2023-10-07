import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';

const TextInput = (({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>	
			<div className='w-full md:w-3/6'>
				<input type="text" className='rounded border focus:outline-none py-2 w-full' {...field}
					placeholder='Enter new todo here...'/>
				{ meta.touched && meta.error ? (
					<div className='text-rose-600'>*{ meta.error }</div>
				) : null }
			</div>
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
					values.task=''
					setSubmitting(false);
				}}>
					<Form className='flex flex-wrap justify-center'>
						<TextInput
							name="task"
							type="text"
							placeholder="New task"
						/>
						<div className='w-full md:w-1/6'>
							<button type='submit' className='border p-2 rounded bg-blue-500 text-white w-full'>Submit</button>
						</div>
					</Form>
			</Formik>
		</>
	)
}

export default NewTodoForm;
