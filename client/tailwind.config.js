/** @type {import('tailwindcss').Config} */
const flowbitePlugin = require('flowbite/plugin');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				'1/20': '5%',
				'1/10': '10%',
				'1/5': '20%',
				'1/4': '25%',
			},
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				proxima: ['proxima-nova', 'sans-serif'],
			},
			lineHeight: { 12: '3rem' },
			colors: {
				primary: '#732727',
				bgPrimary: '#FFFDF5',
				bgGames: '#FFFFFF',
				gamesRed: '#732727',
				gamesBox: '#F5F1ED',
				bgCream: '#F5EFE4',
				bgBlack: '#222222',
				translucent: 'rgba(34, 34, 34, 0.4)',
			},
			fontSize: { '5xl': ['3rem', 1.3] },
		},
	},
	plugins: [flowbitePlugin],
};
