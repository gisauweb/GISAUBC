import React from 'react';
import { Box, Grid } from '@mui/material';

export default function TeamGridItem({ item }) {
	const handleClickButton = (link) => {
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	const teamImageStyle = {
		// aspectRatio: 2 / 2,
		// objectFit: 'contain',
		// mixBlendMode: 'color-burn',
		height: '35vh',
		// width: '45vw',
		width: '100%',
	};

	return (
		<Grid item xs={1} sm={2} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<button
					type='button'
					onClick={() => {
						handleClickButton(item.link);
					}}
				>
					<img src={item.image} alt='item_image' style={teamImageStyle} />
				</button>
			</Box>
		</Grid>
	);
}
