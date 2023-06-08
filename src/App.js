import { Route, Routes } from 'react-router-dom';
import { pages } from './shared/components/navigation-bar/constants';
import { NavigationBar } from './shared/components/navigation-bar/NavigationBar';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import ScrollToTop from 'shared/components/ScrollToTop';

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
			</Routes>
		</StyledEngineProvider>
	);
}

export default App;
