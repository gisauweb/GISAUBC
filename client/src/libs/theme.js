/* eslint-disable object-curly-newline */
const { createTheme } = require('@mui/material');

const theme = createTheme({
	typography: {
		h1: {
			fontFamily: 'Oswald, sans-serif',
		},
		h4: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: '500',
		},
		h5: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: '500',
			fontSize: '1.9rem',
		},
		body1: {
			fontFamily: 'Montserrat, sans-serif',
		},
		button: {
			fontStyle: 'italic',
		},
	},
	palette: {
		primary: {
			main: '#7D0202', // Set your primary color
		},
		secondary: {
			main: '#FFFDF5', // Set your secondary color
		},
		error: {
			main: '#f44336', // Set the error color
		},
		warning: {
			main: '#ff9800', // Set the warning color
		},
		info: {
			main: '#2196f3', // Set the info color
		},
		success: {
			main: '#4caf50', // Set the success color
		},
		// Add more custom colors as needed
	},
});

export default theme;
