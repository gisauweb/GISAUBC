import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PastEventGrow from 'pages/events/components/PastEventGrow';
import TeamGridItem from './TeamGridItem';

export default function TeamGridContent({ data }) {
	const [selectedCard, setSelectedCard] = useState(null);
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	const dataLength = data.length;

	return (
		<>
			{data.slice(0, isMobile ? dataLength / 3 : dataLength).map((item) => (
				<TeamGridItem
					item={item}
					key={item.title}
					selectedCard={selectedCard}
					setSelectedCard={setSelectedCard}
				/>
			))}
			<PastEventGrow data={data} dataLength={dataLength} isMobile={isMobile} />
		</>
	);
}
