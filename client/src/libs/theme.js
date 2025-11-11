import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		h1: {
			fontFamily: 'Oswald, sans-serif',
		},
		h2: {
			fontFamily: 'Oswald, sans-serif',
			fontWeight: '600',
			fontSize: '4rem',
			lineHeight: '1.1',
		},
		h3: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: '600',
			fontSize: '3rem',
			lineHeight: '1.3',
		},
		h4: {
			fontFamily: 'Oswald, sans-serif',
			fontWeight: '500',
		},
		h5: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: '500',
			fontSize: '1.7rem',
		},
		body1: {
			fontFamily: 'Inter, sans-serif',
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
	},
});

export default theme;
