import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';

import './EventLayout.css';
import EventContent from './EventContent';

export default function EventLayout(props) {
	const { id, className, title, events, icon, button1, button2, isMobileView } = props;
	const navigate = useNavigate();

	const handleClickButton = (link) => {
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	const handleClickButton2 = () => {
		navigate(button2.path);
	};

	return (
		<div className={className} id={id}>
			<div className='uppercase flex items-center justify-start'>
				<h1 className='title text-2xl sm:text-3xl xl:text-4xl'>{title}</h1>
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
				<Button text={button2.name} transparentBg handleClickButton={handleClickButton2} />
			</div>
		</div>
	);
}
