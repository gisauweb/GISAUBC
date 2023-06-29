import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import './TeamGridItem.css';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function TeamGridItem({ item }) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClickButton = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<Grid item xs={1} sm={2} md={1.5}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<button
					type='button'
					onClick={() => {
						handleClickButton();
					}}
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
								{/* <a
									href={`https://${item.link}`}
									target='_blank'
									rel='noreferrer'
									className='cursor-context-menu'
								>
									<LinkedInIcon />
								</a> */}
							</div>
						</div>
					</div>
				</button>
			</Box>
		</Grid>
	);
}
