import { Box } from '@mui/material';
import GridItemTag from './GridItemTag';

export default function PastGridItem({ item }) {
	return (
		<Box className='flex flex-col mx-7 sm:mx-0 justify-center items-center'>
			<Box className='relative w-full'>
				<a href={item.infoLink} target='_blank' rel='noreferrer'>
					<div className='relative aspect-square'>
						<img
							src={item.image}
							alt='item_image'
							className='rounded-2xl absolute w-full h-full top-0 left-0 object-cover'
							loading='lazy'
						/>
					</div>
				</a>
				{item.button && (
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
				)}
			</Box>

			<Box className='flex flex-row justify-between align-middle py-4 w-full'>
				<div>
					<span className='py-2 font-bold text-xl md:text-2xl my-2 mr-2'>{item.title}</span>
					<GridItemTag date={item.date} />
				</div>

				<div className='w-12 h-12'>
					<a href={item.recap} target='_blank' rel='noreferrer'>
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
