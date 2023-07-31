import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import theme from 'libs/theme';
import { ThemeProvider, responsiveFontSizes } from '@mui/material';
import App from './App';

ReactGA.initialize(process.env.REACT_APP_GID);

const root = ReactDOM.createRoot(document.getElementById('root'));
const responsiveTheme = responsiveFontSizes(theme);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={responsiveTheme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
