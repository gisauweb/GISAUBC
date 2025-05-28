import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';
import SubHeading from 'shared/components/SubHeading';
import { PARTNERS, rainbow } from 'shared/data/partners';

function Partners() {
	const isBigDisplay = useMediaQuery({ query: '(min-width: 1440px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

	return (
		<Box className={`pt-28 ${isMobile && 'hidden'}`}>
			{/* <Box className='w-full flex pb-3 justify-start'>
				<Typography variant='h4' color='primary'>
					OUR PARTNERS
				</Typography>
				<img src={rainbow} alt='Rainbow' className='w-10 relative right-5 -top-5' loading='lazy' />
			</Box> */}
			<SubHeading text='OUR PARTNERS'>
				<div className='absolute top-0 -left-8'>
					<img src={rainbow} alt='Sunshine' className='h-10 lg:h-full -scale-x-100' loading='lazy' />
				</div>
			</SubHeading>
			<Box className='py-14'>
				<Marquee gradient={false} speed={isBigDisplay ? 80 : 50}>
					<div className='flex items-center justify-around flex-wrap'>
						{PARTNERS.map((partner) => (
							<div className='mx-12' key={partner.name}>
								<img src={partner.logo} alt={partner.name} className='h-28 lg:h-36' loading='lazy' />
							</div>
						))}
					</div>
				</Marquee>
			</Box>
		</Box>
	);
}

export default Partners;
