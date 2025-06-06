import { Container } from '@mui/material';
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
		<Container style={containerStyle} className='relative sm:py-3 pb-28 md:pb-36'>
			<div
				className='flex flex-col gap-5 justify-center items-center mt-5 border-3 border-primary rounded-full'
				aria-label='Save'
			>
				<h4 className='pt-4 lg:pt-6 font-oswald font-bold text-3xl md:text-4xl'>Fill out the form below!</h4>
				<MemberButton showIcon={false} text='GISAU Membership Form' />
			</div>
		</Container>
	);
}

export default MemberContact;
