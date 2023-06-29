import React from 'react';
import { Box, Grid } from '@mui/material';
import './TeamGridItem.css';

export default function TeamGridItem({ item, selectedCard, setSelectedCard }) {
	const isFlipped = selectedCard === item.name;

	const handleClickButton = () => {
		setSelectedCard((prevCard) => (prevCard === item.name ? null : item.name));
	};

	return (
		<Grid item xs={1} sm={1} md={1.5}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<button
					type='button'
					onClick={handleClickButton}
					className={`image-button ${isFlipped ? 'flipped' : ''}`}
				>
					<div className='card'>
						<div className='front'>
							<img src={item.image} alt='item_image' className='rounded-2xl team-image' />
						</div>
						<div className='back bg-primary rounded-2xl text-white'>
							<div className='my-[45%] space-y-1'>
								<p className='text-[1rem]'>{item.name}</p>
								<p className='text-[0.8rem]'>{item.position}</p>
								<p className='text-[0.8rem]'>{item.education}</p>
							</div>
						</div>
					</div>
				</button>
			</Box>
		</Grid>
	);
}
