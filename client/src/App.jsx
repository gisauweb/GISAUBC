import { useState } from 'react';
import Popup from 'pages/pop-up/Popup';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { pages, button } from './shared/components/navigation-bar/constants';
import ScrollToTop from './shared/components/ScrollToTop';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import isGamesPage from './routeUtils';
import './App.css';

function App() {
	const ACTIVATE_POPUP = false;
	const [isPopupOpen, setPopupOpen] = useState(ACTIVATE_POPUP);
	const handleClosePopup = () => {
		setPopupOpen(false);
	};
	const location = useLocation();
	const shouldOpenPopup = ACTIVATE_POPUP && !isGamesPage(location.pathname);

	return (
		<Box className='bg-[#FFFDF5]'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<NavigationBar />}>
					{pages.map((page) => (
						<Route key={page.name} path={page.path} element={page.element} />
					))}
					{button.map((btn) => (
						<Route key={btn.name} path={btn.path} element={btn.element} />
					))}
				</Route>
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
			{shouldOpenPopup && <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />}
		</Box>
	);
}

export default App;
