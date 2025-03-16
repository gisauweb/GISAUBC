import React from 'react';

import EventLayout from 'shared/layout/event-layout/EventLayout';
import { useMediaQuery } from 'react-responsive';
import { UPCOMINGEVENTS, RANTANGAN } from './constants';

export default function Events() {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	const isRantanganShowed = !(RANTANGAN.events.length === 0 && isMobileView);

	return (
		<div className={`${!isMobileView && 'flex'} justify-between flex-wrap pt-24 pb-5`}>
			<EventLayout
				id='events'
				className={`${isRantanganShowed && 'basis-1/3'} `}
				title={UPCOMINGEVENTS.title}
				events={UPCOMINGEVENTS.events}
				icon={UPCOMINGEVENTS.icon}
				button1={
					UPCOMINGEVENTS.title === 'Annual General Meeting' ? UPCOMINGEVENTS.button2 : UPCOMINGEVENTS.button1
				}
				button3={UPCOMINGEVENTS.button3}
				isMobileView={isMobileView}
			/>
			{isRantanganShowed && (
				<EventLayout
					id='rantangan'
					className={`basis-1/3 ${isMobileView && 'mt-24'}`}
					title={RANTANGAN.title}
					events={RANTANGAN.events}
					icon={RANTANGAN.icon}
					button1={RANTANGAN.button1}
					button2={RANTANGAN.button2}
					isMobileView={isMobileView}
				/>
			)}
		</div>
	);
}
