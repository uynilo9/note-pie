import * as vue from 'vue';
import * as pinia from 'pinia';

export const useNavbarStore = pinia.defineStore('navbar', () => {
	const isWindowMaximised = vue.ref(
		screen.availWidth == window.outerWidth &&
			screen.availHeight == window.outerHeight
	);

	return {
		isWindowMaximised,
	};
});
