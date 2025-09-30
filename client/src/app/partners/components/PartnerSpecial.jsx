import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import searchIcon from 'assets/partners/searchIcon.svg';
import destinationIcon from 'assets/partners/destinationIcon.svg';
import peopleIcon from 'assets/partners/peopleIcon.svg';
import stars from 'assets/partners/text decor.svg';
import SubHeading from 'app/shared/components/SubHeading';

export default function PartnerSpecial() {
	return (
		<Box className='relative flex flex-col w-full h-auto align-bottom z-10'>
			<SubHeading text='SPECIAL FOR GISAU MEMBERS' isLeft icon={stars} />
			<div className='flex lg:flex-row flex-col w-full gap-5 pb-10 md:pb-36'>
				<div className='w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl'>
					<img src={searchIcon} alt='search.png' className='pb-4' />
					<div className='flex flex-col gap-4'>
						<Typography variant='h4' color='black'>
							Increased Visibility
						</Typography>
						<Typography variant='body1'>
							Your brand will be prominently featured throughout the academic year at our diverse range of
							events, ensuring exposure to a broad audience of UBC students, faculty, and the wider
							Vancouver community.
						</Typography>
					</div>
				</div>
				<div className='w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl'>
					<img src={destinationIcon} alt='search.png' className='pb-4' />
					<div className='flex flex-col gap-4'>
						<Typography variant='h4' color='black'>
							Targeted Marketing
						</Typography>
						<Typography variant='body1'>
							Align your brand with a vibrant, culturally rich student organization. As a partner, you
							gain access to a niche market passionate about Indonesian culture, education, and student
							life, enhancing your brand&apos;s connection with this dynamic audience.
						</Typography>
					</div>
				</div>
				<div className='w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl'>
					<img src={peopleIcon} alt='search.png' className='pb-4' />
					<div className='flex flex-col gap-4'>
						<Typography variant='h4' color='black'>
							Community Engagement
						</Typography>
						<Typography variant='body1'>
							By partnering with GISAU, you&apos;re playing a vital role in enriching the student
							experience at UBC. Your support helps bridge cultural divides, fosters inclusivity, and
							contributes to a welcoming campus environment.
						</Typography>
					</div>
				</div>
			</div>
		</Box>
	);
}
