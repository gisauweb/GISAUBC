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
import AdminAuthCallback from 'auth/AdminAuthCallback';
import UpdatePassword from 'auth/UpdatePassword';
import AdminApp from 'pages/admin/Admin';
import WorkInProgress from 'pages/404/WorkInProgress';

function App() {
	const { posts, loading, error } = useUpcomingPosts();
	const location = useLocation();

	const [isPopupOpen, setPopupOpen] = useState(false);

	// Show popup once per session
	useEffect(() => {
		if (posts.length > 0 && !isGamesPage(location.pathname) && !location.pathname.startsWith('/auth')) {
			if (!sessionStorage.getItem('gisau_popup_shown')) {
				setPopupOpen(true);
			}
		}
	}, [posts]);

	const isAdminRoute = location.pathname.startsWith('/admin');
	const isAuthRoute = location.pathname.startsWith('/auth');

	// Inject chat script — never on admin or auth callback/reset routes
	useEffect(() => {
		if (isAdminRoute || isAuthRoute) return;
		if (!document.getElementById('chatling-embed-script')) {
			window.chtlConfig = { chatbotId: '1938486472' };
			const script = document.createElement('script');
			script.src = 'https://chatling.ai/js/embed.js';
			script.async = true;
			script.setAttribute('data-id', '1938486472');
			script.id = 'chatling-embed-script';
			document.body.appendChild(script);
		}
	}, [isAdminRoute, isAuthRoute]);

	// Hide chatling on admin/auth routes via a CSS style tag 
	useEffect(() => {
		const styleId = 'hide-chatling-admin';
		if (isAdminRoute || isAuthRoute) {
			if (!document.getElementById(styleId)) {
				const style = document.createElement('style');
				style.id = styleId;
				style.textContent = '[id*="chtl"], [class*="chtl"] { display: none !important; }';
				document.head.appendChild(style);
			}
		} else {
			document.getElementById(styleId)?.remove();
		}
	}, [isAdminRoute, isAuthRoute]);

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
					{/* <Route path='/app' element={<WorkInProgress />} /> */}
				</Route>
				<Route path='/app' element={<Games />} />
				<Route path='/admin/*' element={<AdminApp />} />
				{/* Supabase Auth → URL configuration must allow these Redirect URLs:
				    http://localhost:5173/auth/callback
				    http://localhost:5173/auth/update-password
				    https://www.gisaubc.com/auth/callback
				    https://www.gisaubc.com/auth/update-password */}
				<Route path='/auth/callback' element={<AuthCallback />} />
				<Route path='/auth/admin-callback' element={<AdminAuthCallback />} />
				<Route path='/auth/update-password' element={<UpdatePassword />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			{/* Always mount the popup but pass data safely */}
			<Popup
				data={posts ?? null}
				isOpen={isPopupOpen}
				onClose={() => {
					setPopupOpen(false);
					sessionStorage.setItem('gisau_popup_shown', 'true');
				}}
				loading={loading}
				error={error}
			/>
		</Box>
	);
}

export default App;
