import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import shineIcon from 'assets/members/shineIcon.svg';
import stepIcon1 from 'assets/members/step1.svg';
import stepIcon2 from 'assets/members/step2.svg';
import stepIcon3 from 'assets/members/step3.svg';
import MemberButton from './MemberButton';

function MemberBenefits() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const containerStyle = {
		width: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
	};

	const steps = [
		{
			id: '1',
			title: 'Join our membership',
			description: <MemberButton showIcon={false} text='Sign Up Now' />,
			icon: stepIcon1,
		},
		{
			id: '2',
			title: 'Find the secret codes',
			description: 'Psst... Check our members-only newsletter.',
			icon: stepIcon2,
		},
		{
			id: '3',
			title: 'Enjoy!',
			description: 'Yay! You now have access to all our partners.',
			icon: stepIcon3,
		},
	];

	const stepsBoxStyle = {
		display: 'flex',
		flexDirection: isMobileView ? 'column' : 'row',
		alignItems: isMobileView ? 'flex-start' : 'center',
		width: '100%',
		gap: isMobileView ? '16px' : '0',
	};

	const stepBoxStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		width: '100%',
		marginBottom: isMobileView ? '16px' : '0',
	};

	return (
		<Container style={containerStyle} className='mt-5 sm:my-3'>
			<Box className='relative w-full pb-3 align-bottom'>
				<img src={shineIcon} alt='stars.png' className='absolute -top-6 -left-10 h-10 w-10' />
				<div className='flex flex-col justify-end'>
					<Typography variant='h4' color='primary'>
						How To Access Member Benefits?
					</Typography>
				</div>
			</Box>
			<Box style={stepsBoxStyle} className='mb-8'>
				{steps.map((step) => (
					<Box style={stepBoxStyle} key={step.id} className='flex flex-col justify-center items-center'>
						<img
							src={step.icon}
							alt={`step-${step.id}`}
							className={`h-${isMobileView ? '20' : '30'} w-${isMobileView ? '20' : '30'}`}
						/>
						<Typography variant='h5' className='pt-4 bold'>
							{step.title}
						</Typography>
						<Typography variant='body1' className={`px-${isMobileView ? '4' : '8'} pt-4`}>
							{step.description}
						</Typography>
					</Box>
				))}
			</Box>
		</Container>
	);
}

export default MemberBenefits;
