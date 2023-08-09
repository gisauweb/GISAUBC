import React from 'react';
import Button from 'shared/components/button/Button';

function EventContent({ events, button1, handleClickButton, isMobileView }) {
	return events.length === 0 ? (
		<div>
			<p className='text-center sm:text-left'>Stay tuned :)</p>
		</div>
	) : (
		events.map((event) => (
			<div key={event.title} className='grid gap-y-8'>
				<div>
					<div className='event-img w-[80%] md:w-[50%] m-auto lg:w-[95%] lg:m-0'>
						<a href={`https://${event.registrationLink}`} target='blank' rel='noreferrer'>
							<img src={event.image} alt='event' />
						</a>
					</div>
				</div>
				{!isMobileView && (
					<div className='lg:w-[95%]'>
						<p className='text-center text-xl xl:text-2xl font-bold'>{event.title}</p>
						<p key={event.date} className='text-center'>
							{event.date}
						</p>
						<p key={event.loc} className='text-center'>
							{event.loc}
						</p>
					</div>
				)}
				<div className='grid justify-center lg:w-[95%]'>
					<Button text={button1} handleClickButton={() => handleClickButton(event.registrationLink)} />
				</div>
			</div>
		))
	);
}

export default EventContent;
