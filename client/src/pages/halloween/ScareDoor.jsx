import React, { useState } from 'react';
import './ScareDoor.css';
import { useMediaQuery } from 'react-responsive';

function ScareDoor() {
	const [scareVisible, setScareVisible] = useState(false);
	const [watchYoutube, setWatchYoutube] = useState(false);

	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleScare = () => {
		setScareVisible(true);
		setTimeout(() => {
			setWatchYoutube(true);
		}, 1000);
	};

	const renderScareMaze = () => (
		<div className={`maze-container ${scareVisible ? 'scare' : ''}`}>
			<div className='flex flex-col items-center justify-center space-y-8'>
				<p>Don&apos;t open the door!</p>
				<button type='button' onClick={handleScare}>
					{/* https://lenadesign.org/2021/04/26/css-door-animation-open-close-on-hover/ */}
					<div className='door'>
						<div className={`door-front ${scareVisible ? 'door-open' : ''}`}>
							<div className='knob' />
						</div>
						<div className='scare'>
							<div className='rack' />
							<div className='hat' />
							<div className='jacket' />
						</div>
					</div>
				</button>
			</div>
		</div>
	);

	const renderYoutube = () => (
		<div className='flex flex-col justify-center items-center h-[100vh]'>
			{isMobileView ? (
				<iframe
					width='280'
					height='170'
					src='https://www.youtube.com/embed/a1_ivOwoVRY?si=sdty6eH5YsKeaRyE'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write;
					encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				/>
			) : (
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/a1_ivOwoVRY?si=sdty6eH5YsKeaRyE'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write;
				encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				/>
			)}
		</div>
	);

	return watchYoutube ? renderYoutube() : renderScareMaze();
}

export default ScareDoor;
