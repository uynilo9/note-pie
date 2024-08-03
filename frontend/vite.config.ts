import path from 'node:path';

import * as vite from 'vite';

import Vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

export default vite.defineConfig({
	base: './',
	plugins: [Vue(), UnoCSS()],
	resolve: {
		alias: {
			'@wailsjs': path.resolve(__dirname, 'wailsjs'),
			'@assets': path.resolve(__dirname, 'src/assets'),

			'@': path.resolve(__dirname, 'src'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@mocks': path.resolve(__dirname, 'src/mocks'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@components': path.resolve(__dirname, 'src/components'),
		},
	},
});
