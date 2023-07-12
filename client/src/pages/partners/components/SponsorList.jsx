import { Box } from '@mui/material';
import React from 'react';
import { PARTNERS } from 'shared/data/partners';
import SponsorContainer from './SponsorContainer';

function SponsorList() {
	return (
		<Box className='flex flex-col items-center sm:my-8'>
			{PARTNERS.slice(0).map((sponsor, index) => (
				<SponsorContainer
					name={sponsor.name}
					logo={sponsor.logo}
					reversed={index % 2 !== 0}
					key={sponsor.name}
				/>
			))}
		</Box>
	);
}

export default SponsorList;
