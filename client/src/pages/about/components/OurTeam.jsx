import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SubHeading from 'shared/components/SubHeading';
import smiley from 'assets/home-page/activities/smiley.svg';
import GridContainer from 'shared/components/grid/GridContainer';
import { DropdownMenu } from 'shared/components/index';
import TeamButtons from './TeamButtons';
import SearchInput from './SearchInput';
import TeamGridContent from './TeamGridContent';

export default function OurTeam({ data, states }) {
	// eslint-disable-next-line prettier/prettier
	const {
		selectedYear, selectedButton, selectedCard, setSelectedYear, setSelectedButton, setSelectedCard,
	} = states;

	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (query) => {
		setSearchQuery(query);
	};

	const filteredData = data.filter((teamMember) =>
	(
		teamMember.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
		teamMember.position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
		teamMember.education?.toLowerCase().includes(searchQuery.toLowerCase()))
	);


	return (
		<Box className="pt-0">
			<Box className='w-full pb-4 sm:pb-6 3xl:pb-10 pt-0'>
				<SubHeading
					text='MEET OUR TEAM'
					isRight
					icon={smiley}
				/>
			</Box>
			<Box>
				<Box className="mb-4">
					<SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} />
				</Box>
				<Box className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
					<TeamButtons
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
					/>
					<DropdownMenu
						selectedYear={selectedYear}
						setSelectedYear={setSelectedYear}
						source="About"
					/>
				</Box>
				<GridContainer className='sm:mt-14'>
					<TeamGridContent data={filteredData} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
				</GridContainer>
			</Box>
		</Box>
	);
}
