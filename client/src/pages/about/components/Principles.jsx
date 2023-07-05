import React from 'react';
import { Box, Typography as MUITypography } from '@mui/material';
import { Typography } from 'shared/components';

export default function VisionMission() {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '2rem',
				padding: '2rem',
				backgroundColor: '#FDF2E9',
				borderRadius: '12px',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
			}}
		>
			<div className='space-y-2'>
				<Typography variant='h1' className='mb-6' text='Vision' />
				<MUITypography variant='h6' sx={{ color: '#4B5563', lineHeight: '1.5', fontFamily: 'montserrat' }}>
					Fostering an inclusive, diverse, and welcoming community that nurtures a sense of belonging,
					facilitates meaningful connections, and empowers personal and professional growth, all while
					celebrating Indonesian culture.
				</MUITypography>
			</div>
			<div className='space-y-2'>
				<Typography variant='h1' className='mb-6' text='Mission' />
				<ul style={{ listStyleType: 'disc' }}>
					<li>
						<MUITypography
							variant='h6'
							sx={{ color: '#4B5563', lineHeight: '1.5', fontFamily: 'montserrat' }}
						>
							Establish an Indonesian club at UBC that embraces diversity, respects individual identities,
							and celebrates Indonesian culture, fostering belonging.
						</MUITypography>
					</li>
					<li>
						<MUITypography
							variant='h6'
							sx={{ color: '#4B5563', lineHeight: '1.5', fontFamily: 'montserrat' }}
						>
							Plan diverse recreational, cultural, and social activities, ensuring members have fun
							experiences and create lasting memories.
						</MUITypography>
					</li>
					<li>
						<MUITypography
							variant='h6'
							sx={{ color: '#4B5563', lineHeight: '1.5', fontFamily: 'montserrat' }}
						>
							Offer resources, workshops, and networking to support members&apos; academic and
							professional growth, equipping them for successful careers.
						</MUITypography>
					</li>
				</ul>
			</div>
		</Box>
	);
}
