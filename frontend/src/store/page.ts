import * as vue from 'vue';
import * as pinia from 'pinia';

export const usePageStore = pinia.defineStore('page', () => {
	const shownPage: vue.Ref<Page> = vue.ref('note-pie');

	const goToPage = (targetPage: Page) => {
		shownPage.value = targetPage;
	};

	return {
		shownPage,
		goToPage,
	};
});
