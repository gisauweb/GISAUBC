import React from 'react';
import { Box, Container } from '@mui/material';

function SponsorRegistration() {
	const containerStyle = {
		width: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	};

	const steps = [
		{
			id: '1',
			details: 'Sign up for membership',
		},
		{
			id: '2',
			details: 'Wait for your e-membership',
		},
		{
			id: '3',
			details: 'Enjoy all access to our partners',
		},
	];

	const stepsBoxStyle = {
		display: 'flex',
		width: '100%',
	};

	const stepBoxStyle = {
		margin: '5% 0',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		maxWidth: '100%',
	};

	return (
		<Container style={containerStyle} className='mt-5 sm:my-3'>
			<span className='text-2xl sm:text-3xl xl:text-4xl font-montserrat text-primary pt-4 lg:pt-6'>
				How to access our partners?
			</span>
			<Box style={stepsBoxStyle} className='flex-col lg:flex-row'>
				{steps.map((step) => (
					<Box style={stepBoxStyle} key={step.id} className='flex lg:flex-col'>
						<span
							className='text-2xl sm:text-3xl xl:text-4xl font-oswald text-primary
										border-4 border-primary rounded-full px-3 sm:px-7 sm:py-2'
						>
							{step.id}
						</span>
						<span
							className='text-lg sm:text-xl xl:text-2xl font-montserrat text-black
										font-semibold pl-4 lg:pl-0 lg:mt-5 text-left'
						>
							{step.details}
						</span>
					</Box>
				))}
			</Box>
		</Container>
	);
}

export default SponsorRegistration;
