/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
			},
			lineHeight: { 12: '3rem' },
			colors: {
				primary: '#7D0202',
				bgPrimary: '#FFFDF5',
			},
		},
		fontSize: { '5xl': ['3rem', 1.3] },
	},
	plugins: [],
};
