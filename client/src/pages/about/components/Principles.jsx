import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SubHeading from 'shared/components/SubHeading';
import blueLine from 'assets/home-page/activities/blue-line.svg';
import VALUES from 'assets/about/values';
import ExpandableBox from './ExpandableBox';
import { VISION_MISSION } from '../constants';

export default function Principles() {
	const [expandedBox, setExpandedBox] = useState(null);

	return (
		<Box>
			<SubHeading
				text='Our Values'
				isLeft
				icon={blueLine}
			/>

			<Grid container spacing={2}>
				{VALUES.map((image, i) => (
					<Grid item xs={12} md={6} key={`values${i}`}>
						<Box
							component="img"
							src={image}
							sx={{ width: '100%', borderRadius: "25px" }}
						/>
					</Grid>
				))}
			</Grid>

			<Grid container spacing={2} sx={{ marginTop: 4 }}>
				{VISION_MISSION.map((item, i) => (
					<Grid item xs={12} key={i}>
						<Box sx={{ position: "relative", mb: 4 }}>
							<Typography
								sx={{
									fontSize: "110px",
									fontWeight: "bold",
									position: "absolute",
									top: "-20px",
									left: 0,
									zIndex: 1,
									opacity: 0.15,
									color: "#BFA285",
									pointerEvents: "none",
								}}
							>
								0{i + 1}
							</Typography>

							<Typography
								variant="h6"
								sx={{
									fontWeight: "bold",
									position: "relative",
									zIndex: 2,
									pt: "15px",
									ml: "120px",
									mb: "5px"
								}}
							>
								{item.vision}
							</Typography>
							<Typography
								sx={{
									position: "relative",
									zIndex: 2,
									ml: "120px",
									fontSize: "12px"
								}}
								paragraph>
								{item.mission}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box >

		// <Box
		// 	className='flex flex-col items-center sm:flex-row sm:items-left
		// 		mt-10 p-8 bg-[#FEF8EF] rounded-xl min-h-80'
		// 	sx={{
		// 		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		// 		boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
		// 	}}
		// >
		// 	<Box className='w-full sm:w-1/2 flex flex-col justify-center items-center mb-6 sm:mb-0'>
		// 		<Typography variant='h2' color='primary'>
		// 			Our
		// 		</Typography>
		// 		<Typography variant='h2' color='primary'>
		// 			Values
		// 		</Typography>
		// 	</Box>
		// 	<Box className='flex flex-col w-full sm:w-1/2 justify-center space-y-4 hover:cursor-pointer'>
		// 		{VISION_MISSION.map((item) => (
		// 			<ExpandableBox
		// 				title={item.vision}
		// 				description={item.mission}
		// 				expandedBox={expandedBox}
		// 				setExpandedBox={setExpandedBox}
		// 				key={item.vision}
		// 			/>
		// 		))}
		// 	</Box>
		// </Box>
	);
}
