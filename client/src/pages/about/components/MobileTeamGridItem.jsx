import React from 'react';
import { Box, Grid } from '@mui/material';
import './TeamGridItem.css';

export default function MobileTeamGridItem({ item, selectedCard, setSelectedCard }) {
	const isFlipped = selectedCard === item.name;

	const firstName = item.name?.trim().split(' ')[0].toLowerCase();

	const handleClickButton = () => {
		setSelectedCard((prevCard) => (prevCard === item.name ? null : item.name));
	};

	return (
		<Grid item xs={1} sm={1.5} md={2} lg={1.5}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<button
					type='button'
					onClick={handleClickButton}
					className={`image-button ${isFlipped ? 'flipped' : ''}`}
				>
					<div className='card'>
						<div className='front'>
							<img
								src={
									item.image
										? item.image
										: `https://hugxahcgzygqbgbxyvcc.supabase.co/storage/v1/object/public/executives/25_26/${firstName}.webp`
								}
								alt='item_image'
								className='team-image'
								loading='lazy'
							/>
						</div>
						<div className='back bg-primary rounded-2xl text-white'>
							<div className='my-[45%] space-y-1'>
								<p className='text-[1rem] lg:text-[0.85rem] xl:text-[1rem]'>{item.name}</p>
								<p className='text-[0.8rem] xl:text-[0.85rem]'>{item.position}</p>
								<p className='text-[0.8rem] xl:text-[0.85rem]'>{item.education}</p>
							</div>
						</div>
					</div>
				</button>
			</Box>
		</Grid>
	);
}
