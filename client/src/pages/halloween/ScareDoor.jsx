import React, { useState } from 'react';
import './ScareDoor.css';
import { useMediaQuery } from 'react-responsive';
import ReactAudioPlayer from 'react-audio-player';
import scaryAudio from 'assets/halloween/jump_scare.mp3';

function ScareDoor() {
	const [scareVisible, setScareVisible] = useState(false);
	const [playScream, setPlayScrem] = useState(false);
	const [openDoor, setOpenDoor] = useState(false);
	const [watchYoutube, setWatchYoutube] = useState(false);

	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleScare = () => {
		setOpenDoor(true);
		setTimeout(() => {
			setPlayScrem(true);
			setScareVisible(true);
		}, 700);
		setTimeout(() => {
			setWatchYoutube(true);
		}, 1500);
	};

	const renderScareMaze = () => (
		<div className={`maze-container ${scareVisible ? 'scare' : ''}`}>
			{playScream ? (
				<ReactAudioPlayer src={scaryAudio} autoPlay />
			) : (
				<div className='flex flex-col items-center justify-center space-y-8'>
					{!(playScream && scareVisible) && (
						<>
							<p>Don&apos;t open the door!</p>
							<button type='button' onClick={handleScare}>
								{/* https://lenadesign.org/2021/04/26/css-door-animation-open-close-on-hover/ */}
								<div className='door'>
									<div className={`door-front ${openDoor ? 'door-open' : ''}`}>
										<div className='knob' />
									</div>
									<div className='door-back'>
										<div className='rack' />
										<div className='hat' />
										<div className='jacket' />
									</div>
								</div>
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);

	const renderYoutube = () => (
		<div className='flex flex-col justify-center items-center h-[100vh]'>
			{isMobileView ? (
				<iframe
					width='280'
					height='170'
					src='https://www.youtube.com/embed/fKuUEBlkoJo?si=GDVxG_i-XTpA7wQr&amp;controls=0'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write;
					encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				/>
			) : (
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/fKuUEBlkoJo?si=GDVxG_i-XTpA7wQr&amp;controls=0'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write;
					encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				/>
			)}
		</div>
	);

	return watchYoutube ? renderYoutube() : renderScareMaze();
}

export default ScareDoor;
