import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import theme from 'libs/theme';
import { ThemeProvider, responsiveFontSizes } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactGA.initialize(process.env.REACT_APP_GID);

const root = ReactDOM.createRoot(document.getElementById('root'));
const responsiveTheme = responsiveFontSizes(theme);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain='dev-ltkz6dt5hkbper2c.us.auth0.com'
				clientId='99H1EVkFqHS2PfD0TRyx8qkNQiWHUpzp'
				authorizationParams={{ redirect_uri: window.location.origin }}
			>
				<ThemeProvider theme={responsiveTheme}>
					<App />
				</ThemeProvider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
