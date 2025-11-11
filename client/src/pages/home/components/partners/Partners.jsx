import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';
import SubHeading from 'shared/components/SubHeading';
import { PARTNERS, rainbow } from 'shared/data/partners';

function Partners() {
	const isBigDisplay = useMediaQuery({ query: '(min-width: 1440px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

	return (
		<div className={`pt-28 ${isMobile && 'hidden'}`}>
			<SubHeading text='OUR PARTNERS' isLeft isMirror icon={rainbow} />
			<div className='py-14'>
				<Marquee gradient={false} speed={isBigDisplay ? 80 : 50}>
					<div className='flex items-center justify-around flex-wrap'>
						{PARTNERS.map((partner) => (
							<div className='mx-12' key={partner.name}>
								<img src={partner.logo} alt={partner.name} className='h-28 lg:h-36' loading='lazy' />
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default Partners;
