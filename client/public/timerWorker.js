/* eslint-disable no-restricted-globals */
let intervalId;

self.onmessage = (e) => {
	switch (e.data.command) {
		case 'start':
			clearInterval(intervalId);
			intervalId = setInterval(() => self.postMessage('tick'), 1000);
			break;
		case 'stop':
			clearInterval(intervalId);
			break;
		default:
	}
};
