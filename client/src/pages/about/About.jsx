import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import aboutLandingImage from 'assets/landing/about.jpeg';
import Introduction from './components/Introduction';

import { EXECUTIVES } from './constants';
import OurTeam from './components/OurTeam';

export default function About() {
	const [selectedYear, setSelectedYear] = useState('2022/2023');
	const [selectedButton, setSelectedButton] = useState('All');
	const [selectedCard, setSelectedCard] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		setSelectedCard(null);
		const filteredData =
			selectedButton === 'All'
				? Object.values(EXECUTIVES[selectedYear]).flat()
				: EXECUTIVES[selectedYear][selectedButton];
		setData(filteredData);
	}, [selectedButton, selectedYear]);

	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={aboutLandingImage} text='About Us' />
			<MainContainer>
				<Box className='w-[85%] mx-auto pt-0'>
					<Introduction />
					<OurTeam
						data={data}
						states={{
							selectedYear,
							selectedButton,
							selectedCard,
							setSelectedYear,
							setSelectedButton,
							setSelectedCard,
						}}
					/>
				</Box>
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
