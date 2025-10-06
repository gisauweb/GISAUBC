import supabase from 'libs/supabaseClient';
import EventContent from 'pages/events/components/EventContent';
import { useForm } from 'react-hook-form';
import MainContainer from 'shared/layout/MainContainer';

export default function AdminPage() {
	const {
		register,
		handleSubmit,
		watch,
		// formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await supabase.from('posts').insert(data);
	};

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		<>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<div className='flex flex-col'>
					<input placeholder='Enter Title' {...register('title')} />

					{/* include validation with required or other standard HTML validation rules */}
					<input placeholder='Enter Caption' {...register('caption', { required: true })} />
					{/* errors will return when field validation fails  */}
					{/* {errors.caption && <span className='text-red'>This field is required</span>} */}

					<input placeholder='Enter Location' {...register('location', { required: true })} />
					<input
						placeholder='Enter Registration Link'
						{...register('registration_link', { required: true })}
					/>
					<input type='date' {...register('date', { required: true })} />
					<label htmlFor='event'>
						Is this an event?
						<input id='event' type='checkbox' {...register('is_event', { required: true })} />
					</label>
				</div>

				<input type='submit' />
			</form>
			<MainContainer>
				<EventContent upcoming />
			</MainContainer>
		</>
	);
}
