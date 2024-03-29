import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Typography } from '@mui/material';
import Button from '../../components/button/Button';
import './EventLayout.css';
import EventContent from './EventContent';

export default function EventLayout(props) {
	// eslint-disable-next-line object-curly-newline
	const { id, className, title, events, icon, button1, button2, isMobileView } = props;
	const navigate = useNavigate();

	const handleClickButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for GISAU Hiring',
		});
		window.open(link, '_blank', 'noreferrer');
	};

	const handleClickButton2 = () => {
		navigate(button2.path);
	};

	return (
		<div className={className} id={id}>
			<div className='uppercase flex items-center justify-start h-10'>
				<Typography variant='h4' color='primary'>
					{title}
				</Typography>
				<div className='events-icon'>{icon}</div>
			</div>
			<div className='mt-10 grid gap-y-12'>
				<EventContent
					events={events}
					button1={button1}
					handleClickButton={handleClickButton}
					isMobileView={isMobileView}
				/>
			</div>
			<div className={`grid justify-center lg:w-[95%] ${events.length === 0 ? 'mt-12' : 'mt-4'} `}>
				<Button text={button2.name} background='transparentBg' handleClickButton={handleClickButton2} />
			</div>
		</div>
	);
}
