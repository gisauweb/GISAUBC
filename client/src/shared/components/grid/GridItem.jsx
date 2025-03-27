import { Box, Grid } from '@mui/material';
import playBtn from 'assets/events-page/play.png';
import ReactGA from 'react-ga4';
import { useMediaQuery } from 'react-responsive';
import Button from 'shared/components/button/Button';
import GridItemDescription from 'shared/components/grid/GridItemDescription';
import GridItemTag from './GridItemTag';

export default function GridItem({ item, upcomingEvent, itemType }) {
	const handleClickButton = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};
	const isMobileView = useMediaQuery({ query: '(max-width: 750px)' });
	const handleRegisterButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for SOTO',
		});
		window.open(link, '_blank', 'noreferrer');
	};

	return itemType === 'rantangan' && upcomingEvent ? (
		// upcoming rantangan
		<Grid item>
			<Box className={`flex ${isMobileView ? 'flex-col' : 'flex-row'} mx-7 sm:mx-0`}>
				<img src={item.image} alt='item_image' className='rounded-2xl z-10' loading='lazy' />
				<Box className={`flex flex-col ${isMobileView ? 'items-center text-center' : 'ml-8 mt-5'} space-y-4`}>
					<span className='font-semibold text-xl py-2' style={{ zIndex: 5 }}>
						{item.title}
					</span>
					<GridItemDescription item={item} itemType={itemType} upcomingEvent={upcomingEvent} />
					<Button text='Pre-order' handleClickButton={() => handleClickButton(item.registrationLink)} />
				</Box>
			</Box>
		</Grid>
	) : (
		// event
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0 justify-center items-center'>
				<Box className='relative w-full'>
					<a href={item.infoLink} target='_blank' rel='noreferrer'>
						<img
							src={item.image}
							alt='item_image'
							className='rounded-2xl z-10 object-cover'
							loading='lazy'
						/>
					</a>
					{item.button && (
						<a
							href={item.button.link}
							target='_blank'
							rel='noreferrer'
							className='absolute bottom-4 right-4'
							aria-label={item.button.name}
						>
							<Box
								className='flex items-center justify-center text-center'
								sx={{
									backgroundColor: '#222222',
									border: '2px solid #732727',
									borderRadius: '20px',
									padding: '6px 12px',
									fontSize: '0.875rem',
									color: 'white',
									textDecoration: 'none',
									cursor: 'pointer',
								}}
							>
								<p className='underline-animation font-oswald text-sm md:text-base text-white'>
									{item.button.name}
								</p>
							</Box>
						</a>
					)}
				</Box>

				<Box className='flex flex-row justify-between align-middle py-4 w-full'>
					<div>
						<span className='py-2 font-bold text-xl md:text-2xl my-2 mr-2'>{item.title}</span>
						<GridItemTag date={item.date} />
						{upcomingEvent && <GridItemDescription item={item} itemType={itemType} />}
					</div>

					<div className='w-12 h-12'>
						<a href={item.recap} target='_blank' rel='noreferrer'>
							<div
								className='flex justify-center items-center border-2
								hover:cursor-pointer circleButton rounded-full'
								style={{ width: '3rem', height: '3rem', borderColor: '#732727' }}
							>
								<img src={playBtn} alt='Play Button' style={{ width: '1rem', height: '1.2rem' }} />
							</div>
						</a>
					</div>
				</Box>

				{upcomingEvent && (
					<Box className='flex flex-col items-center justify-center space-y-6'>
						<Button
							text={item.title === 'Core Hiring' ? 'View Hiring Package' : 'Register'}
							handleClickButton={() => handleRegisterButton(item.registrationLink)}
						/>
						{item.title !== 'Fall Hiring' && (
							<a href={item.infoLink} target='_blank' rel='noreferrer' aria-label='Save'>
								<Button text='View Details' background='transparentBg' />
							</a>
						)}
					</Box>
				)}
			</Box>
		</Grid>
	);
}
