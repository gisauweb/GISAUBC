export default function PageHeading({ children }) {
	return (
		<div className='mb-28'>
			<h3 className='text-primary font-oswald text-2xl sm:text-4xl md:text-5xl font-bold'>{children}</h3>
		</div>
	);
}
