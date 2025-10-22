import React, { useState } from 'react';
import './ScareDoor.css';
import { useMediaQuery } from 'react-responsive';
import ReactAudioPlayer from 'react-audio-player';
import scaryAudio from 'assets/halloween/jump_scare.mp3';

function ScareDoor() {
	const [scareVisible, setScareVisible] = useState(false);
	const [playScream, setPlayScream] = useState(false);
	const [openDoor, setOpenDoor] = useState(false);
	const [watchYoutube, setWatchYoutube] = useState(false);

	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleScare = () => {
		setOpenDoor(true);
		setTimeout(() => {
			setPlayScream(true);
			setScareVisible(true);
		}, 700);
		setTimeout(() => {
			setWatchYoutube(true);
		}, 1500);
	};

	const playAudio = () => {
		if (!playScream) {
			setTimeout(() => {
				setPlayScream(true);
			}, 700);
		}
	};

	const renderScareMaze = () => (
		<div className={`maze-container ${scareVisible ? 'scare' : ''}`}>
			<div className='flex flex-col items-center justify-center space-y-8'>
				{!(playScream && scareVisible) && (
					<>
						<p>Don&apos;t open the door!</p>
						<button type='button' onClick={playAudio}>
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
						</button>
					</>
				)}
				{playScream && <ReactAudioPlayer src={scaryAudio} autoPlay />}
			</div>
		</div>
	);

	const renderYoutube = () => (
		<div className='flex flex-col justify-center items-center h-screen'>
			{isMobileView ? (
				<iframe
					width='300'
					height='200'
					src='https://www.youtube.com/embed/fKuUEBlkoJo?si=GDVxG_i-XTpA7wQr'
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
					src='https://www.youtube.com/embed/fKuUEBlkoJo?si=GDVxG_i-XTpA7wQr'
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
