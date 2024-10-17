import { Typography } from '@mui/material';
import React from 'react';
import searchIcon from 'assets/partners/searchLogo.svg';
import pinpointLogo from 'assets/partners/pinpointLogo.svg';
import communityIcon from 'assets/partners/communityIcon.svg';

export default function PartnerPerks() {
	return (
		<div className='flex flex-col w-full pb-14'>
			<Typography variant='h2' color='primary' className='text-xs pb-40'>
				Become a partner and get featured in our events.
			</Typography>
			<Typography variant='h4' color='primary' className='pb-7'>
				Special For Gisau Partners
			</Typography>
			<div className='flex flex-row w-full gap-6'>
				<div className='w-full h-full bg-cardColor p-7 rounded-lg pb-12'>
					<img src={searchIcon} alt='Search Icon' className='h-full pb-3' loading='lazy' />
					<Typography variant='h4'>Increased Visibility</Typography>
					<Typography variant='body1' className='pt-3'>
						Your brand will be prominently featured throughout the academic year at our diverse range of
						events, ensuring exposure to a broad audience of UBC students, faculty, and the wider Vancouver
						community.
					</Typography>
				</div>
				<div className='w-full h-full bg-cardColor p-7 rounded-lg'>
					<img
						src={pinpointLogo}
						alt='pinpoint Icon'
						className='h-6 sm:h-10 xl:h-full right-0 top-0 sm:right-3 sm:top-0 lg:top-2 xl:top-0 pb-3'
						loading='lazy'
					/>
					<Typography variant='h4'>Targeted Marketing</Typography>
					<Typography variant='body1' className='pt-3'>
						Align your brand with a vibrant, culturally rich student organization. As a partner, you gain
						access to a niche market passionate about Indonesian culture, education, and student life,
						enhancing your brand’s connection with this dynamic audience.
					</Typography>
				</div>
				<div className='w-full h-full bg-cardColor p-7 rounded-lg pb-12'>
					<img
						src={communityIcon}
						alt='community Icon'
						className='h-6 sm:h-10 xl:h-full right-0 top-0 sm:right-3 sm:top-0 lg:top-2 xl:top-0 pb-3'
						loading='lazy'
					/>
					<Typography variant='h4'>Community Engagement</Typography>
					<Typography variant='body1' className='pt-3'>
						By partnering with GISAU, you&apos;re playing a vital role in enriching the student experience
						at UBC. Your support helps bridge cultural divides, fosters inclusivity, and contributes to a
						welcoming campus environment.
					</Typography>
				</div>
			</div>
		</div>
	);
}
