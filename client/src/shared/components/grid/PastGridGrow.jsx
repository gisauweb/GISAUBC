import React, { useState } from 'react';
import { Grid, Grow } from '@mui/material';
import Button from 'shared/components/button/Button';
import TeamGridItem from 'pages/about/components/TeamGridItem';
import MobileTeamGridItem from 'pages/about/components/MobileTeamGridItem';
import GridItem from './GridItem';

function PastGridGrow({ data, dataLength, upcomingEvent, isMobile, teamGridCard }) {
	const [grow, setGrow] = useState(false);
	const firstGrowLength = Math.ceil(dataLength / 3);
	const secondGrowLength = Math.ceil((dataLength * 2) / 3);
	// eslint-disable-next-line one-var, one-var-declaration-per-line
	let selectedCard, setSelectedCard;

	// const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });

	if (teamGridCard) {
		({ selectedCard, setSelectedCard } = teamGridCard);
	}

	const handleChange = () => {
		setGrow(!grow);
	};

	return grow ? (
		<>
			<Grow in={grow} style={{ transformOrigin: '0 0 0', width: '100%' }} timeout={grow ? 3000 : 0}>
				<Grid item xs={1} sm={2} md={2}>
					<Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
						{data.slice(firstGrowLength, secondGrowLength).map((item) => {
							if (teamGridCard) {
								if (isMobile) {
									return (
										<MobileTeamGridItem
											item={item}
											key={item.name}
											selectedCard={selectedCard}
											setSelectedCard={setSelectedCard}
										/>
									);
								} else {
									return (
										<TeamGridItem
											item={item}
											key={item.name}
											selectedCard={selectedCard}
											setSelectedCard={setSelectedCard}
										/>
									);
								}
							}
							return <GridItem item={item} upcomingEvent={upcomingEvent} key={item.title} />;
						})}
					</Grid>
				</Grid>
			</Grow>
			{/* Conditionally applies the timeout prop to change the entry speed. */}
			<Grow in={grow} style={{ transformOrigin: '0 0 0', width: '100%' }} timeout={grow ? 3000 : 0}>
				<Grid item xs={1} sm={2} md={2}>
					<Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
						{data.slice(secondGrowLength).map((item) => {
							if (teamGridCard) {
								if (isMobile) {
									return (
										<MobileTeamGridItem
											item={item}
											key={item.name}
											selectedCard={selectedCard}
											setSelectedCard={setSelectedCard}
										/>
									);
								} else {
									return (
										<TeamGridItem
											item={item}
											key={item.name}
											selectedCard={selectedCard}
											setSelectedCard={setSelectedCard}
										/>
									);
								}
							}
							return <GridItem item={item} upcomingEvent={upcomingEvent} key={item.title} />;
						})}
					</Grid>
				</Grid>
			</Grow>
			<Grid item xs={1} sm={2} md={2} className='flex justify-center'>
				<Button text='Show Less' handleClickButton={handleChange} background='transparentBg' />
			</Grid>
		</>
	) : (
		!upcomingEvent && isMobile && (
			<Grid item xs={1} sm={2} md={2} className='flex justify-center'>
				<Button text='Show More' handleClickButton={handleChange} />
			</Grid>
		)
	);
}

export default PastGridGrow;
