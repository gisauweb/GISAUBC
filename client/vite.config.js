import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			pages: path.resolve(__dirname, './src/pages'),
			shared: path.resolve(__dirname, './src/shared'),
			libs: path.resolve(__dirname, './src/libs'),
			assets: path.resolve(__dirname, './src/assets'),
			hooks: path.resolve(__dirname, './src/hooks'),
			auth: path.resolve(__dirname, './src/auth'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// React core — tiny, cached aggressively
					'vendor-react': ['react', 'react-dom', 'react-router-dom'],
					// MUI — large, changes rarely
					'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
					// Stripe — only needed on payment pages
					'vendor-stripe': ['@stripe/stripe-js', '@stripe/react-stripe-js'],
					// Charts / misc heavy libs
					'vendor-charts': ['chart.js', 'react-chartjs-2'],
				},
			},
		},
	},
});
