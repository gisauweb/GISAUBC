import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import aboutLandingImage from 'assets/landing-image/about.webp';
import indoMapImage from '/icons/indo map.png';
import pura from '/icons/pura.svg';
import Introduction from './components/Introduction';
import { EXECUTIVES } from './constants';
import OurTeam from './components/OurTeam';
import Highlights from './components/Highlights';

export default function About() {
	const [selectedYear, setSelectedYear] = useState('2024/2025');
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
		<Box position='relative'>
			<LandingImage bgImage={aboutLandingImage} text='About Us' />

			<MainContainer>
				<Box className='w-[85%] mx-auto pb-0 lg:pb-0'>
					<Introduction />
				</Box>
			</MainContainer>

			<Box>
				<img src={indoMapImage} alt='indo-map-illustration' />
			</Box>

			<MainContainer className='pt-0 relative z-2'>
				<Box className='w-[85%] mx-auto pb-24 lg:pb-36 pt-0'>
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
				<ScrollButton threshold={1 / 2} />
			</MainContainer>

			{/* <img
				src={pura}
				alt="pura"
				className='hidden md:block'
				style={{
					position: "absolute",
					right: 0,
					top: "71%",
					width: "400px",
					zIndex: 1, 
					pointerEvents: "none"
				}}
			/> */}

			<Box position='relative' sx={{ zIndex: 2 }}>
				<Highlights />
			</Box>

			<Footer />
		</Box>
	);
}
