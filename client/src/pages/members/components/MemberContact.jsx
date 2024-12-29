import React from 'react';
import { Container, Typography } from '@mui/material';
import wavy from 'assets/partners/text decor 3.svg';
import MemberButton from './MemberButton';

function MemberContact() {
	const containerStyle = {
		width: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	};

	return (
		<Container style={containerStyle} className='relative mt-5 sm:py-3 pb-28 md:pb-36'>
			<div className='relative flex w-full pb-10'>
				<img src={wavy} alt='wavy.png' className='absolute -top-4 -left-10 h-12 w-12' />
				<Typography variant='h4' color='primary' className='pt-4 lg:pt-6 uppercase'>
					Interested to become a member?
				</Typography>
			</div>
			<Typography variant='h4' color='black' className='pt-4 lg:pt-6 pb-8'>
				Fill out the form below!
			</Typography>
			<MemberButton showIcon={false} text='GISAU Membership Form' />
		</Container>
	);
}

export default MemberContact;
