import { Box } from '@mui/material';
import { useUpcomingPosts } from 'hooks/usePosts';
import Admin from 'pages/admin/Admin';
import NotFound from 'pages/404/NotFound';
import WorkInProgress from 'pages/404/WorkInProgress';
import Popup from 'pages/pop-up/Popup';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import isGamesPage from './routeUtils';
import { button, pages } from './shared/components/navigation-bar/constants';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import ScrollToTop from './shared/components/ScrollToTop';

function App() {
	const { posts, loading, error } = useUpcomingPosts();
	const location = useLocation();

	const [isPopupOpen, setPopupOpen] = useState(false);

	// Open popup when posts are ready and we are not on a "games" page
	useEffect(() => {
		if (posts.length > 0 && !isGamesPage(location.pathname) && !isPopupOpen) {
			setPopupOpen(true);
		}
	}, [posts]);

	// Inject chat script once
	useEffect(() => {
		if (!document.getElementById('chatling-embed-script')) {
			window.chtlConfig = { chatbotId: '1938486472' };
			const script = document.createElement('script');
			script.src = 'https://chatling.ai/js/embed.js';
			script.async = true;
			script.setAttribute('data-id', '1938486472');
			script.id = 'chatling-embed-script';
			document.body.appendChild(script);
		}
	}, []);

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
					<Route path='/games' element={<Navigate replace to='/wip' />} />
					<Route path='*' element={<NotFound />} />
				</Route>

				<Route path='/admin' element={<Admin />} />
			</Routes>

			{/* Always mount the popup but pass data safely */}
			<Popup
				data={posts[0] ?? null}
				isOpen={isPopupOpen}
				onClose={() => setPopupOpen(false)}
				loading={loading}
				error={error}
			/>
		</Box>
	);
}

export default App;
