import { Navigate, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { NavigationBar, ScrollToTop, PAGES } from './shared/components/index';
import './App.css';

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<NavigationBar />}>
					{PAGES.map((page) => (
						<Route key={page.name} path={page.path} element={page.element} />
					))}
				</Route>
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</StyledEngineProvider>
	);
}

export default App;
