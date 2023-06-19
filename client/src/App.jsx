import { Navigate, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { NavigationBar, ScrollToTop } from './shared/components/index';
import { pages } from './shared/components/navigation-bar/constants';
import './App.css';

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<NavigationBar />}>
					{pages.map((page) => (
						<Route key={page.name} path={page.path} element={page.element} />
					))}
				</Route>
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</StyledEngineProvider>
	);
}

export default App;
