import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer, DropdownMenu } from 'shared/components/index';
import eventLandingImage from 'assets/landing/event.jpg';
import GridContainer from 'shared/components/GridContainer';
import Introduction from './Introduction';
import TeamButtons from './TeamButtons';
import TeamGridContent from './TeamGridContent';
import { EXECUTIVES } from './constants';

export default function About() {
	const [selectedYear, setSelectedYear] = useState('2022/2023');
	const [selectedButton, setSelectedButton] = useState('All');
	const [data, setData] = useState([]);

	useEffect(() => {
		const filteredData =
			selectedButton === 'All'
				? Object.values(EXECUTIVES[selectedYear]).flat()
				: EXECUTIVES[selectedYear][selectedButton];
		setData(filteredData);
	}, [selectedButton, selectedYear]);

	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={eventLandingImage} text='About Us' />
			<MainContainer>
				<Box className='w-[85%] mx-auto pt-0'>
					<Introduction />
					<Box className='w-full py-10'>
						<Typography variant='h1' text='Meet our team.' />
					</Box>
					<Box>
						<Box className='flex'>
							<TeamButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
							<DropdownMenu
								selectedYear={selectedYear}
								setSelectedYear={setSelectedYear}
								source='About'
							/>
						</Box>
						<GridContainer>
							<TeamGridContent data={data} />
						</GridContainer>
					</Box>
				</Box>
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
