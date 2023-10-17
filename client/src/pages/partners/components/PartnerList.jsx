import { Box } from '@mui/material';
import React from 'react';
import { PARTNERS } from 'shared/data/partners';
import PartnerContainer from './PartnerContainer';

function PartnerList() {
	return (
		<Box className='flex flex-col my-8 sm:my-14'>
			{PARTNERS.slice(0).map((sponsor) => (
				<PartnerContainer
					name={sponsor.name}
					logo={sponsor.logo}
					description={sponsor.description}
					link={sponsor.link}
					key={sponsor.name}
				/>
			))}
		</Box>
	);
}

export default PartnerList;
