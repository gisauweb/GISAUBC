import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { activities, smiley } from './constants';
import ActivitiesSlider from './Slider';

function Activities() {
	const isMobile = useMediaQuery({ query: '(max-width: 1023px) ' });

	return (
		<Box className='pt-24'>
			<Box className='w-full flex justify-start items-center pb-1 sm:pb-0 lg:pb-3'>
				<Typography variant='h4' color='primary'>
					WHAT WE DO
				</Typography>
				<img src={smiley} alt='Smiley' className='h-6 sm:h-10 xl:h-full ml-1' />
			</Box>
			<Box className='w-full flex lg:py-8'>
				{isMobile ? (
					<ActivitiesSlider className='mt-8 sm:mt-12' />
				) : (
					<>
						{activities.map((activity) => (
							<Box
								key={activity.id}
								className='w-1/3 flex flex-col'
								sx={{ alignItems: activity.alignment }}
							>
								<Box className='w-5/6 relative'>
									<div className='h-48 2xl:h-56 flex overflow-hidden rounded-xl'>
										<img
											alt='Activity'
											id={activity.id}
											src={activity.image}
											className='w-full object-cover'
										/>
									</div>
									<img alt='Icon' src={activity.icon} className={`absolute ${activity.iconStyle}`} />
								</Box>
								<Box className='w-5/6 text-center px-3'>
									<Box className='font-montserrat text-2xl' sx={{ my: 3, fontWeight: 'bold' }}>
										{activity.title}
									</Box>
									<Box className='font-montserrat text-lg'>{activity.description}</Box>
								</Box>
							</Box>
						))}
					</>
				)}
			</Box>
		</Box>
	);
}
export default Activities;
