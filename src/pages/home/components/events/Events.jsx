import React from 'react';

import EventLayout from 'shared/layout/event-layout/EventLayout';
import { useMediaQuery } from 'react-responsive';
import { UPCOMINGEVENTS, RANTANGAN } from './constants';

const RESPONSIVE_SIZE = '1039px';

export default function Events() {
	const isMobileView = useMediaQuery({
		query: `(max-width: ${RESPONSIVE_SIZE})`,
	});

	let isRantanganShowed = true;

	if (RANTANGAN.events.length === 0 && isMobileView) {
		isRantanganShowed = false;
	}

	return (
		<div className={`${!isMobileView && 'flex'} justify-between flex-wrap pt-24`}>
			<EventLayout
				id='events'
				className={`${isRantanganShowed && 'basis-1/3'} `}
				title={UPCOMINGEVENTS.title}
				events={UPCOMINGEVENTS.events}
				icon={UPCOMINGEVENTS.icon}
				button1={UPCOMINGEVENTS.button1}
				button2={UPCOMINGEVENTS.button2}
				isMobileView={isMobileView}
			/>
			{isRantanganShowed && (
				<EventLayout
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
