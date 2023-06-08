import { Box } from '@mui/material';
import React from 'react';
import SponsorContainer from './SponsorContainer';
import { PARTNERS } from 'shared/data/partners';

const SponsorList = () => {
	return (
		<Box className='flex flex-col items-center sm:my-8'>
			{PARTNERS.slice(0).map((sponsor, index) => (
				<SponsorContainer
					name={sponsor.name}
					logo={sponsor.logo}
					reversed={index % 2 !== 0}
					key={sponsor.name}
				/>
			))}
		</Box>
	);
};

export default SponsorList;

// {checked ?
//     <>
//         <Grow in={checked}
//             style={{ transformOrigin: '0 0 0', width: "100%" }}
//             {...(checked ? { timeout: 1500 } : {})}
//         >
//             {growSponsorList(PARTNERS.slice(4, 5))}
//         </Grow>
//         {/* Conditionally applies the timeout prop to change the entry speed. */}
//         <Grow
//             in={checked}
//             style={{ transformOrigin: '0 0 0', width: "100%" }}
//             {...(checked ? { timeout: 3000 } : {})}
//         >
//             {growSponsorList(PARTNERS.slice(5))}
//         </Grow>
//         <Button className='py-5' text="Show Less" handleClickButton={handleChange} transparentBg={true} />
//     </> :
//     <Button className='py-5' text="Show More" handleClickButton={handleChange} />}
