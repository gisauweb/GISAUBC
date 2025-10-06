import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'build', // CRA's default build output
	},
	resolve: {
		alias: {
			pages: path.resolve(__dirname, './src/pages'),
			shared: path.resolve(__dirname, './src/shared'),
			libs: path.resolve(__dirname, './src/libs'),
			assets: path.resolve(__dirname, './src/assets'),
		},
	},
});
