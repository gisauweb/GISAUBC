import { useNavigate } from 'react-router-dom';

const SECTIONS = [
	{ path: '/admin/members',       label: 'Members',             description: 'View and edit all registered members.',      icon: '👥' },
	{ path: '/admin/cash',          label: 'Cash Payments',       description: 'Approve pending cash payments.',             icon: '💵' },
	{ path: '/admin/events',        label: 'Events & Rantangan',  description: 'Create, edit, and publish posts.',           icon: '📅' },
	{ path: '/admin/registrations', label: 'Event Registrations', description: 'See who signed up for each event.',          icon: '🎟️' },
	{ path: '/admin/existing',      label: 'Existing Members',    description: 'Manage pre-approved student IDs.',           icon: '🎓' },
	{ path: '/admin/merch',         label: 'Merch',               description: 'Manage merch items and purchases.',          icon: '👕' },
];

export default function AdminDashboard({ profile }) {
	const navigate = useNavigate();

	return (
		<div className='p-8'>
			<div className='mb-8'>
				<h1 className='text-2xl font-bold text-gray-900'>Welcome back, {profile?.firstName}</h1>
				<p className='text-gray-500 text-sm mt-1'>GISAU Admin Panel</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{SECTIONS.map((section) => (
					<button
						key={section.path}
						onClick={() => navigate(section.path)}
						className='text-left bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200'
					>
						<div className='text-3xl mb-3'>{section.icon}</div>
						<h2 className='font-semibold text-gray-900 text-base'>{section.label}</h2>
						<p className='text-gray-500 text-sm mt-1'>{section.description}</p>
					</button>
				))}
			</div>
		</div>
	);
}
