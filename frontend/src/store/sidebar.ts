import * as vue from 'vue';
import * as pinia from 'pinia';

export const useSidebarStore = pinia.defineStore('sidebar', () => {
	const isSidebarClosed = vue.ref(false);

	const toggleSidebar = () => {
		isSidebarClosed.value = !isSidebarClosed.value;
	};

	return {
		isSidebarClosed,
		toggleSidebar,
	};
});
