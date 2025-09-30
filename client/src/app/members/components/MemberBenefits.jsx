import { Box, Container, Typography } from '@mui/material';
import lineConnector from 'assets/members/lineConnector.svg';
import shineIcon from 'assets/members/shineIcon.svg';
import stepIcon1 from 'assets/members/step1.svg';
import stepIcon2 from 'assets/members/step2.svg';
import stepIcon3 from 'assets/members/step3.svg';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SubHeading from 'app/shared/components/SubHeading';
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
		alignItems: 'center',
		position: 'relative',
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
		position: 'relative',
	};

	return (
		<Container style={containerStyle} className='mt-5 sm:my-5'>
			<SubHeading text='HOW TO ACCESS MEMBER BENEFITS?' isLeft icon={shineIcon} />
			<Box style={stepsBoxStyle} className='mb-8 pt-8'>
				{steps.map((step, index) => (
					<React.Fragment key={step.id}>
						<Box style={stepBoxStyle} className='flex flex-col justify-center items-center'>
							<img
								src={step.icon}
								alt={`step-${step.id}`}
								className={`h-${isMobileView ? '20' : '30'} w-${isMobileView ? '20' : '30'} z-10`}
							/>
							<Typography variant='h5' className='pt-4 bold'>
								{step.title}
							</Typography>
							<Typography variant='body1' className={`px-${isMobileView ? '4' : '8'} pt-4`}>
								{step.description}
							</Typography>
						</Box>
						{!isMobileView && index < steps.length - 1 && (
							<img
								src={lineConnector}
								alt='line-connector'
								className='absolute'
								style={{
									position: 'absolute',
									top: 'calc(50% - 50px)',
									left: `calc(${33.33 * (index + 1)}% - 100px)`,
									transform: 'translateY(-50%)',
									width: '200px',
									height: '150px',
									zIndex: 0,
								}}
							/>
						)}
					</React.Fragment>
				))}
			</Box>
		</Container>
	);
}

export default MemberBenefits;
