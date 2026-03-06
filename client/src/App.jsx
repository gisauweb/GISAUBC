import { Box } from '@mui/material';
import { useUpcomingPosts } from 'hooks/usePosts';
import NotFound from 'pages/404/NotFound';
import Games from 'pages/games/Games';
import Popup from 'pages/pop-up/Popup';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import isGamesPage from './routeUtils';
import { button, pages } from './shared/components/navigation-bar/constants';
import NavigationBar from './shared/components/navigation-bar/NavigationBar';
import ScrollToTop from './shared/components/ScrollToTop';
import AuthCallback from 'auth/AuthCallback';
import WorkInProgress from 'pages/404/WorkInProgress';

function App() {
	const { posts, loading, error } = useUpcomingPosts();
	const location = useLocation();

	const [isPopupOpen, setPopupOpen] = useState(false);

	// Open popup only if there's a new event the user hasn't seen yet
	useEffect(() => {
		if (posts.length > 0 && !isGamesPage(location.pathname)) {
			const latestId = String(posts[0].id);
			const seenId = localStorage.getItem('gisau_popup_seen');
			if (seenId !== latestId) {
				setPopupOpen(true);
			}
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
					<Route path='*' element={<NotFound />} />
					{/* <Route path='/app' element={<WorkInProgress />} /> */}
				</Route>
				<Route path='/app' element={<Games />} />
				<Route path='/auth/callback' element={<AuthCallback />} />
				{/* <Route path='/admin' element={<Admin />} /> */}
			</Routes>

			{/* Always mount the popup but pass data safely */}
			<Popup
				data={posts ?? null}
				isOpen={isPopupOpen}
				onClose={() => {
					setPopupOpen(false);
					if (posts.length > 0) localStorage.setItem('gisau_popup_seen', String(posts[0].id));
				}}
				loading={loading}
				error={error}
			/>
		</Box>
	);
}

export default App;
