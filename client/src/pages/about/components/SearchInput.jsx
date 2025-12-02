import { Box, TextField } from '@mui/material';
import React from 'react';

export default function SearchInput({ searchQuery, onSearchChange }) {
	return (
		<Box className='flex flex-wrap lg:space-x-6 3xl:space-x-10 mb-1 sm:mb-0'>
			<TextField
				id='search-team'
				label='Type to Search...'
				value={searchQuery}
				onChange={(e) => onSearchChange(e.target.value)}
				sx={{
					width: '100%',
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderRadius: '40px',
							border: '2px solid #732727',
						},
						'&:hover fieldset': {
							border: '2px solid #732727',
						},
					},
				}}
				variant='outlined'
			/>
		</Box>
	);
}
