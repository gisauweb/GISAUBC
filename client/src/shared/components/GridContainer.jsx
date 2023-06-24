import React from 'react';
import { Box, Grid } from '@mui/material';

export default function GridContainer({ className, children }) {
	return (
		<Box sx={{ flexGrow: 1, mt: 6 }} className={className}>
			<Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
				{children}
			</Grid>
		</Box>
	);
}
