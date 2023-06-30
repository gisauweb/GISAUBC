import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PastEventGrow from 'pages/events/components/PastEventGrow';
import TeamGridItem from './TeamGridItem';

export default function TeamGridContent({ data, selectedCard, setSelectedCard }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	const dataLength = data.length;

	return (
		<>
			{data.slice(0, isMobile && dataLength >= 6 ? Math.ceil(dataLength / 3) : dataLength).map((item) => (
				<TeamGridItem
					item={item}
					key={item.name}
					selectedCard={selectedCard}
					setSelectedCard={setSelectedCard}
				/>
			))}
			{dataLength >= 6 && <PastEventGrow data={data} dataLength={dataLength} isMobile={isMobile} />}
		</>
	);
}
