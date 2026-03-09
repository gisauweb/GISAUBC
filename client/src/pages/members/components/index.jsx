import MemberBenefits from './MemberBenefits';
import MemberContact from './MemberContact';
import MemberSpecial from './MemberSpecial';

export { MemberBenefits, MemberContact, MemberSpecial };

export function StepContainer({ children }) {
	return <div className='max-w-4xl mx-auto space-y-6'>{children}</div>;
}

export function StepHeading({ children }) {
	return (
		<div className='bg-primary text-white p-3 rounded-md inline-block'>
			<h2 className='text-xl font-bold font-oswald pl-2 pr-4'>{children}</h2>
		</div>
	);
}
