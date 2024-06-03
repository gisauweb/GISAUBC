import { Box } from '@mui/material';
import { Input } from '@material-tailwind/react';

export default function StyledTextField({ value, label, edit, onChange }) {
	return (
		<Box className='flex flex-col mb-5'>
			<span className='text-lg font-poppins font-normal mb-1'>{label}</span>
			<Input
				variant='outlined'
				value={value}
				className={`rounded-xl font-poppins text-base leading-none outline-1
				outline-black ${edit ? 'text-black' : 'text-gray-400'}`}
				containerProps={{ className: 'h-8' }}
				disabled={!edit}
				onChange={onChange}
			/>
		</Box>
	);
}
