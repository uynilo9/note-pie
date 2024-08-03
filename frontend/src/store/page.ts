import * as vue from 'vue';
import * as pinia from 'pinia';

export const usePageStore = pinia.defineStore('page', () => {
	const shownPage: vue.Ref<Page> = vue.ref('note-pie');

	const shownPageTitle = vue.computed(() => {
		return (
			shownPage.value.charAt(0).toUpperCase() + shownPage.value.slice(1)
		);
	});

	const goToPage = (targetPage: Page) => {
		shownPage.value = targetPage;
	};

	return {
		shownPage,
		shownPageTitle,
		goToPage,
	};
});
