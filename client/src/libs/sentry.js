/* eslint-disable max-len */
import * as Sentry from '@sentry/react';

const sentryConfig = {
	dsn: 'https://39f33d86dddd1df15d76ef8e0c13cca4@o4506517586247680.ingest.sentry.io/4506517587361792',
	integrations: [
		new Sentry.BrowserTracing({
			// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
			tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
		}),
		new Sentry.Replay({
			maskAllText: false,
			blockAllMedia: false,
		}),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
};

export { Sentry, sentryConfig };
