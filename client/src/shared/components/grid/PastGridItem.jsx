import { Box } from '@mui/material';
import GridItemTag from './GridItemTag';

export default function PastGridItem({ item }) {
	const date = new Date(item.date);

	const formattedDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return (
		<Box className='flex flex-col mx-7 sm:mx-0 justify-center items-center'>
			<Box className='relative w-full'>
			{item.infoLink ? (
				<a href={item.infoLink} target='_blank' rel='noreferrer' className='group block relative aspect-square'>
					<img
						src={item.coverImage}
						alt='item_image'
						className='rounded-2xl w-full h-full object-cover transition-all duration-300 group-hover:brightness-75'
						loading='lazy'
					/>
					<div className='absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
						<div className='bg-black/60 rounded-full px-4 py-2 flex items-center gap-2'>
							<svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
								<path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
							</svg>
							<span className='text-white text-sm font-oswald'>View</span>
						</div>
					</div>
				</a>
			) : (
				<div className='relative aspect-square'>
					<img
						src={item.coverImage}
						alt='item_image'
						className='rounded-2xl absolute w-full h-full top-0 left-0 object-cover'
						loading='lazy'
					/>
				</div>
			)}
				{/* {item.button && (
					<a
						href={item.button.link}
						target='_blank'
						rel='noreferrer'
						className='absolute bottom-4 right-4'
						aria-label={item.button.name}
					>
						<Box
							className='flex items-center justify-center text-center'
							sx={{
								backgroundColor: '#222222',
								border: '2px solid #732727',
								borderRadius: '20px',
								padding: '6px 12px',
								fontSize: '0.875rem',
								color: 'white',
								textDecoration: 'none',
								cursor: 'pointer',
							}}
						>
							<p className='underline-animation font-oswald text-sm md:text-base text-white'>
								{item.button.name}
							</p>
						</Box>
					</a>
				)} */}
			</Box>

			<Box className='flex flex-row justify-between align-middle py-4 w-full'>
				<div>
					<span className='py-2 font-bold text-xl md:text-2xl my-2 mr-2'>{item.title}</span>
					<GridItemTag date={formattedDate} />
				</div>

				<div className='w-12 h-12'>
					<a href={item.instagramLink} target='_blank' rel='noreferrer'>
						<div
							className='flex justify-center items-center border-2
        hover:cursor-pointer circleButton rounded-full'
							style={{ width: '3rem', height: '3rem', borderColor: '#732727' }}
						>
							<img
								src='past-events/play.png'
								alt='Play Button'
								style={{ width: '1rem', height: '1.2rem' }}
							/>
						</div>
					</a>
				</div>
			</Box>
		</Box>
	);
}
