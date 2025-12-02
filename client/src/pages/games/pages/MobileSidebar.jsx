import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from '/gisau-logo/gisau.svg';
import sidemenu from 'assets/games/sidebar.svg';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from './Sidebar/Sidebar';

export default function MobileSideBar({ currentPage, setCurrentPage }) {
	const { user } = useAuth0();
	const username = user.given_name || user.nickname;

	const [sidebarVisible, setSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	const onCloseSidebar = () => {
		setSidebarVisible(false);
	};

	const sidebarAnimation = useSpring({ left: sidebarVisible ? '0%' : '-80%' });

	return (
		<>
			{sidebarVisible && (
				<div
					className='fixed top-0 left-0 w-screen h-full bg-black opacity-60 z-50 rounded-none blur-sm'
					onClick={onCloseSidebar}
				/>
			)}
			<animated.div
				className='fixed z-50'
				style={{
					...sidebarAnimation,
					position: 'fixed',
					width: '80vw',
				}}
			>
				<Sidebar
					username={username}
					picture={user.picture}
					onCloseSidebar={onCloseSidebar}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</animated.div>
			<div className='flex flex-row'>
				<div className='flex flex-row fixed top-5 z-40 left-5' onClick={toggleSidebar}>
					<img
						src={sidemenu}
						alt='sidemenu'
						style={{ maxWidth: '50px', height: 'auto', zIndex: '50', left: '0px' }}
					/>
				</div>
				<div className='flex flex-row fixed top-5 z-40 right-5'>
					<img
						src={logo}
						href='/home'
						alt='GISAU logo red'
						style={{ maxWidth: '50px', height: 'auto', zIndex: '50' }}
					/>
				</div>
			</div>
		</>
	);
}
