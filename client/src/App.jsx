import { useState } from 'react';
import Popup from 'pages/pop-up/Popup';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ScrollToTop from './shared/components/ScrollToTop';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import pages from './shared/components/navigation-bar/constants';
import './App.css';

function App() {
	const ACTIVATE_POPUP = false;
	const [isPopupOpen, setPopupOpen] = useState(ACTIVATE_POPUP);
	const handleClosePopup = () => {
		setPopupOpen(false);
	};
	const location = useLocation();
	// TODO: create a util function that all other pages can use to check if it's games page
	const isGamesPage = location.pathname === '/games';
	const shouldOpenPopup = ACTIVATE_POPUP && !isGamesPage;

	return (
		<Box className='bg-[#FFFDF5]'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<NavigationBar />}>
					{pages.map((page) => (
						<Route key={page.name} path={page.path} element={page.element} />
					))}
				</Route>
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
			{shouldOpenPopup && <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />}
		</Box>
	);
}

export default App;
