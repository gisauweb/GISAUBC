import React from 'react';

export default function GridItemDescription({ item, itemType }) {
	return itemType === 'rantangan' ? (
		<span>{item.description}</span>
	) : itemType === 'event' ? (
		<>
			<span>{item.date}</span>
			<span>{item.loc}</span>
		</>
	) : null;
}
