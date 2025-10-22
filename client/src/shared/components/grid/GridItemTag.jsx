export default function GridItemTag({ date }) {
	return (
		<div className='bg-bg-cream w-fit h-fit py-1 px-1 md:px-3 rounded-md mt-2'>
			<p className='text-xs md:text-sm'>{date}</p>
		</div>
	);
}
