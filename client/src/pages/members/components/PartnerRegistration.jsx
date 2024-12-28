import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

function PartnerRegistration() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

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
			details: 'Sign up for our membership',
		},
		{
			id: '2',
			details: 'Find the codes in our members-only newsletter',
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
			<Typography variant='h3' color='primary' className='pt-4 lg:pt-6'>
				How to access our partners?
			</Typography>
			<Box style={stepsBoxStyle} className={`flex-col lg:flex-row ${isMobileView ? 'mb-8' : 'mb-0'}`}>
				{steps.map((step) => (
					<Box style={stepBoxStyle} key={step.id} className='flex lg:flex-col'>
						<Typography
							variant='h4'
							color='primary'
							className='border-4 border-primary rounded-full px-3 sm:px-7 sm:py-2'
						>
							{step.id}
						</Typography>
						<Typography variant='h6' className='pl-4 lg:pl-0 lg:mt-5 text-left lg:text-center lg:pt-4'>
							{step.details}
						</Typography>
					</Box>
				))}
			</Box>
		</Container>
	);
}

export default PartnerRegistration;
