import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button, Footer } from 'shared/components';
import MainContainer from 'shared/layout/MainContainer';

export default function MembershipClosed({ showSignOut, onSignOut }) {
	const navigate = useNavigate();

	return (
		<Box>
			<MainContainer>
				<div className='flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-10'>
					<div className='space-y-5 mt-20 max-w-2xl px-4'>
						<h1 className='text-3xl md:text-5xl font-bold font-oswald text-primary'>
							Membership registration is closed
						</h1>
						<p className='text-bg-black font-proxima text-lg md:text-xl'>
							We are not accepting new members during the summer break. Please check back when the
							academic year begins.
						</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 pt-4'>
						<Button text='Return to Home' handleClickButton={() => navigate('/')} />
						{showSignOut && onSignOut && (
							<Button text='Sign Out' handleClickButton={onSignOut} />
						)}
					</div>
				</div>
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
