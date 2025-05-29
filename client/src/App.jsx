import { useState, useEffect } from 'react';
import Popup from 'pages/pop-up/Popup';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { pages, button } from './shared/components/navigation-bar/constants';
import ScrollToTop from './shared/components/ScrollToTop';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import isGamesPage from './routeUtils';
import './App.css';

function App() {
	const ACTIVATE_POPUP = true;
	const [isPopupOpen, setPopupOpen] = useState(ACTIVATE_POPUP);
	const handleClosePopup = () => {
		setPopupOpen(false);
	};
	const location = useLocation();
	const shouldOpenPopup = ACTIVATE_POPUP && !isGamesPage(location.pathname);

	useEffect(() => {
		if (!ACTIVATE_POPUP && !document.getElementById('chatling-embed-script')) {
			window.chtlConfig = { chatbotId: '1938486472' };

			const script = document.createElement('script');
			script.src = 'https://chatling.ai/js/embed.js';
			script.async = true;
			script.setAttribute('data-id', '1938486472');
			script.id = 'chatling-embed-script';

			document.body.appendChild(script);
		}
	}, [ACTIVATE_POPUP]);

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
