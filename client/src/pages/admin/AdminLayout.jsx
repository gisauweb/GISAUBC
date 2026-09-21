import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
	{ path: '/admin',                label: 'Dashboard',           icon: '🏠' },
	{ path: '/admin/members',        label: 'Members',             icon: '👥' },
	{ path: '/admin/cash',           label: 'Cash Payments',       icon: '💵' },
	{ path: '/admin/events',         label: 'Events & Rantangan',  icon: '📅' },
	{ path: '/admin/registrations',  label: 'Event Registrations', icon: '🎟️' },
	{ path: '/admin/existing',       label: 'Existing Members',    icon: '🎓' },
	{ path: '/admin/merch',          label: 'Merch',               icon: '👕' },
];

function Sidebar({ profile, onLogout, onClose }) {
	const { pathname } = useLocation();

	return (
		<div className='flex flex-col h-full w-64 bg-white border-r border-gray-200'>
			{/* Logo */}
			<div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
				<Link to='/admin' className='flex items-center gap-2'>
					<img src='/gisau-logo/gisau.svg' alt='GISAU' className='h-7 w-auto' />
					<span className='font-bold text-primary text-sm uppercase tracking-wider'>Admin</span>
				</Link>
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
				{NAV_ITEMS.map((item) => {
					// Dashboard is only active on exact /admin, others match by prefix
					const isActive = item.path === '/admin'
						? pathname === '/admin' || pathname === '/admin/'
						: pathname.startsWith(item.path);

					return (
						<Link
							key={item.path}
							to={item.path}
							onClick={() => onClose && onClose(false)}
							className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
								isActive
									? 'bg-primary text-white'
									: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
							}`}
						>
							<span>{item.icon}</span>
							{item.label}
						</Link>
					);
				})}
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

export default function AdminLayout({ profile, onLogout, children }) {
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

			{/* Sidebar */}
			<div
				className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 lg:transition-none ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<Sidebar profile={profile} onLogout={onLogout} onClose={setSidebarOpen} />
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
