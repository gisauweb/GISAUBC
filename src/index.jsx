import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { initializeGtag } from 'gtag-ga';
import { gtag, install } from 'ga-gtag';
import App from './App';

// initializeGtag(process.env.REACT_APP_GID);

install(process.env.REACT_APP_GID);
gtag('event', 'start');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
