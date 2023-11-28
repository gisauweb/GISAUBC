import { useState } from 'react';
import Popup from 'pages/pop-up/Popup';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ScrollToTop from './shared/components/ScrollToTop';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import pages from './shared/components/navigation-bar/constants';
import './App.css';

function App() {
	const [isPopupOpen, setPopupOpen] = useState(true);
	const handleClosePopup = () => {
		setPopupOpen(false);
	};

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
			<Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
		</Box>
	);
}

export default App;
