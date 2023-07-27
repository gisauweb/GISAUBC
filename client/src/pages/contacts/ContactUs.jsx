import React from 'react';
import { Box, Typography } from '@mui/material';
import { Footer } from 'shared/components/index';
import PLUGS from './constants';

export default function ContactUs() {
	const handlePlugClick = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};
	return (
		<Box className='' sx={{ background: 'linear-gradient(#EDE6CB, #FFFDF5);' }}>
			<div className='flex h-[18vh]' />
			<Box className='flex flex-col items-center'>
				<Typography variant='h1' color='primary' sx={{ fontWeight: 'bold' }}>
					CONTACT US
				</Typography>
				<Typography variant='h6' color='primary' sx={{ my: 2 }}>
					Reach out to us — we don&apos;t bite!
				</Typography>
			</Box>
			<Box className='w-4/5 mx-auto my-10'>
				<Box className='flex justify-between space-x-16 my-10'>
					{PLUGS.map((plug) => (
						<Box
							className='bg-bgPrimary w-1/2 border-2 border-[#F2F0E3] rounded-2xl hover:cursor-pointer'
							onClick={() => {
								handlePlugClick(plug.link);
							}}
						>
							<Box className='p-8'>
								<img src={plug.icon} alt='social-media-icon' />
								<Box className='flex flex-col space-y-3 mt-14'>
									<Typography variant='h4' color='primary'>
										{plug.name}
									</Typography>
									<Typography variant='body1'>{plug.description}</Typography>
									<Typography
										variant='body1'
										sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
									>
										{plug.handle}
									</Typography>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
				<Box className='flex justify-between bg-bgPrimary'>
					<Box className='flex'>
						<p>a</p>
						<p>b</p>
					</Box>
					<Box>
						<p>c</p>
					</Box>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
