import React from 'react';
import { Box, Typography } from '@mui/material';
import Principles from './Principles';
import PageHeading from 'shared/components/PageHeading';

export default function Introduction() {
	return (
		<Box>
			<Box className='md:pr-3 lg:pr-0'>
				<PageHeading>We are a student organization that promotes and celebrates Indonesian culture in UBC since the early 2000s.</PageHeading>
			</Box>
			<Principles />
		</Box>
	);
}
