import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import theme from 'libs/theme';
import { ThemeProvider, responsiveFontSizes } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import getAuthConfig from 'libs/config';
import history from 'libs/history';
import { Sentry, sentryConfig } from 'libs/sentry';
import App from './App';

ReactGA.initialize(import.meta.env.VITE_APP_GID);
Sentry.init(sentryConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
const responsiveTheme = responsiveFontSizes(theme);

const onRedirectCallback = (appState) => {
	history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

const config = getAuthConfig();

const providerConfig = {
	domain: config.domain,
	clientId: config.clientId,
	onRedirectCallback,
	authorizationParams: {
		redirect_uri: window.location.origin,
		...(config.audience ? { audience: config.audience } : null),
	},
};

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider {...providerConfig}>
				<ThemeProvider theme={responsiveTheme}>
					<App />
				</ThemeProvider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
