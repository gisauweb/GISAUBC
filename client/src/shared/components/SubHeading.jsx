export default function SubHeading({ children, text }) {
	return (
		<div className='w-fit-content relative flex justify-start mb-3'>
			{children}
			<h4 className='font-oswald text-2xl md:text-3xl pt-4 lg:pt-6 font-bold text-primary'>{text}</h4>
		</div>
	);
}
