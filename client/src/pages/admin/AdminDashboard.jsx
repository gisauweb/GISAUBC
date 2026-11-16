import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useNavigate } from 'react-router-dom';

const SECTIONS = [
	{ path: '/admin/members',       label: 'Members',             description: 'View and edit all registered members.',      icon: GroupOutlinedIcon },
	{ path: '/admin/cash',          label: 'Cash Payments',       description: 'Approve pending cash payments.',             icon: PaymentsOutlinedIcon },
	{ path: '/admin/events',        label: 'Events & Rantangan',  description: 'Create, edit, and publish posts.',           icon: EventOutlinedIcon },
	{ path: '/admin/registrations', label: 'Event Registrations', description: 'See who signed up for each event.',          icon: ConfirmationNumberOutlinedIcon },
	{ path: '/admin/existing',      label: 'Existing Members',    description: 'Manage pre-approved student IDs.',           icon: SchoolOutlinedIcon },
	{ path: '/admin/merch',         label: 'Merch',               description: 'Manage merch items and purchases.',          icon: CheckroomOutlinedIcon },
];

export default function AdminDashboard({ profile }) {
	const navigate = useNavigate();

	return (
		<div className='p-8'>
			<div className='mb-8'>
				<h1 className='text-2xl font-bold text-gray-900'>Welcome back, {profile?.firstName}</h1>
				<p className='text-gray-500 text-sm mt-1'>GISAU Admin Panel by Gaida For Gaida With Gaida</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{SECTIONS.map((section) => (
					<button
						key={section.path}
						onClick={() => navigate(section.path)}
						className='text-left bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200'
					>
						<section.icon fontSize='large' className='text-primary mb-3' />
						<h2 className='font-semibold text-gray-900 text-base'>{section.label}</h2>
						<p className='text-gray-500 text-sm mt-1'>{section.description}</p>
					</button>
				))}
			</div>
		</div>
	);
}
