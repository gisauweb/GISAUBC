import { useState } from 'react';

const NAV_ITEMS = [
	{ id: 'Dashboard', label: 'Dashboard', icon: '🏠' },
	{ id: 'Members', label: 'Members', icon: '👥' },
	{ id: 'Cash Payments', label: 'Cash Payments', icon: '💵' },
	{ id: 'Events', label: 'Events & Rantangan', icon: '📅' },
	{ id: 'Registrations', label: 'Event Registrations', icon: '🎟️' },
	{ id: 'Existing Members', label: 'Existing Members', icon: '🎓' },
	{ id: 'Merch', label: 'Merch', icon: '👕' },
];

function Sidebar({ currentPage, setCurrentPage, profile, onLogout, onClose }) {
	return (
		<div className='flex flex-col h-full w-64 bg-white border-r border-gray-200'>
			{/* Logo */}
			<div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
				<div className='flex items-center gap-2'>
					<img src='/gisau-logo/gisau.svg' alt='GISAU' className='h-7 w-auto' />
					<span className='font-bold text-primary text-sm uppercase tracking-wider'>Admin</span>
				</div>
				{/* Close button — mobile only */}
				{onClose && (
					<button onClick={() => onClose(false)} className='lg:hidden text-gray-400 hover:text-gray-700'>
						<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>
				)}
			</div>

			{/* Nav */}
			<nav className='flex-1 px-3 py-4 space-y-1 overflow-y-auto'>
				{NAV_ITEMS.map((item) => (
					<button
						key={item.id}
						onClick={() => {
							setCurrentPage(item.id);
							if (onClose) onClose(false);
						}}
						className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
							currentPage === item.id
								? 'bg-primary text-white'
								: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
						}`}
					>
						<span>{item.icon}</span>
						{item.label}
					</button>
				))}
			</nav>

			{/* User + logout */}
			<div className='px-4 py-4 border-t border-gray-100'>
				<div className='text-xs text-gray-500 mb-3 truncate'>
					{profile?.firstName} {profile?.lastName}
				</div>
				<button
					onClick={onLogout}
					className='w-full text-sm text-red-500 hover:text-red-700 font-medium text-left'
				>
					Sign out
				</button>
			</div>
		</div>
	);
}

export default function AdminLayout({ currentPage, setCurrentPage, profile, onLogout, children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen overflow-hidden bg-gray-50'>
			{/* Mobile backdrop */}
			{sidebarOpen && (
				<div
					className='fixed inset-0 z-20 bg-black/40 lg:hidden'
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Sidebar — overlay on mobile, static on desktop */}
			<div
				className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 lg:transition-none ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<Sidebar
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					profile={profile}
					onLogout={onLogout}
					onClose={setSidebarOpen}
				/>
			</div>

			{/* Main content */}
			<div className='flex flex-1 flex-col min-w-0 overflow-hidden'>
				{/* Mobile top bar */}
				<div className='flex items-center justify-between px-4 h-14 border-b border-gray-200 bg-white shrink-0 lg:hidden'>
					<button
						onClick={() => setSidebarOpen(true)}
						className='p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100'
					>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
						</svg>
					</button>
					<span className='font-bold text-primary text-sm uppercase tracking-wider'>GISAU Admin</span>
					<div className='w-8' />
				</div>

				{/* Page content */}
				<div className='flex-1 overflow-y-auto'>
					{children}
				</div>
			</div>
		</div>
	);
}
