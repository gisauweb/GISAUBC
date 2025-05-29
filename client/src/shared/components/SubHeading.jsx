export default function SubHeading({ text, icon, isRight, isLeft, isMirror }) {
	return (
		<div className='w-fit relative flex justify-start mb-3 items-center'>
			{isLeft && (
				<div className='absolute top-0 -left-10 lg:-left-14'>
					<img
						src={icon}
						alt='subheading-icon'
						className={`h-10 lg:h-full ${isMirror && '-scale-x-100'}`}
						loading='lazy'
					/>
				</div>
			)}
			<h4 className='font-oswald text-2xl md:text-3xl mt-4 lg:mt-6 font-bold text-primary'>{text}</h4>
			{isRight && <img src={icon} alt='subheading-icon' className='h-full' loading='lazy' />}
		</div>
	);
}
