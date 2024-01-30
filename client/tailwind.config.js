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
				inter: ['Inter', 'sans_serif'],
				poppins: ['Poppins', 'sans_serif'],
			},
			lineHeight: { 12: '3rem' },
			colors: {
				primary: '#7D0202',
				bgPrimary: '#FFFDF5',
				gamesRed: '#732727',
				gamesBox: '#F5F1ED',
			},
			fontSize: { '5xl': ['3rem', 1.3] },
		},
	},
	plugins: [flowbitePlugin],
};
