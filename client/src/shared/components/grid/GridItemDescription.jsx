import React from 'react';

export default function GridItemDescription({ item, itemType, upcomingEvent }) {
	return itemType === 'rantangan' ? (
		<>
			{' '}
			<div style={{ zIndex: 5 }} className='zindex'>
				<span>{item.description}</span>
				{upcomingEvent && (
					<div className='flex flex-row space-x-4 z-5'>
						<div style={{ backgroundColor: '#F3F1E7' }} className='rounded-lg p-4'>
							<span className='inline-block'>
								Pick up:&nbsp; <strong>{item.location}</strong>
							</span>
						</div>
						<div style={{ backgroundColor: '#F3F1E7' }} className='rounded-lg p-4'>
							<span className='inline-block'>
								Price:&nbsp; <strong>{item.price}</strong>
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	) : itemType === 'event' ? (
		<>
			<span>{item.date}</span>
			<span>{item.loc}</span>
		</>
	) : null;
}
