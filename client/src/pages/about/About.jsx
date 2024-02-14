import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import aboutLandingImage from 'assets/landing-image/about.png';
import Introduction from './components/Introduction';
import { EXECUTIVES } from './constants';
import OurTeam from './components/OurTeam';
import Highlights from './components/Highlights';

export default function About() {
	const [selectedYear, setSelectedYear] = useState('2023/2024');
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
		<Box>
			<LandingImage bgImage={aboutLandingImage} text='About Us' />
			<MainContainer>
				<Box className='w-[85%] mx-auto space-y-16'>
					<Introduction />
					<Highlights />
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
