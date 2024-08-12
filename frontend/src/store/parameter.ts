import * as vue from 'vue';
import * as pinia from 'pinia';

import _Themes from '@components/parameters/_Themes.vue';
import _Formats from '@components/parameters/_Formats.vue';
import _Fonts from '@components/parameters/_Fonts.vue';
import _Update from '@components/parameters/_Update.vue';
import _About from '@components/parameters/_About.vue';

export const useParameterStore = pinia.defineStore('parameter', () => {
	const parameters: Record<Parameter, vue.Component> = {
		themes: _Themes,
		fonts: _Fonts,
		formats: _Formats,
		update: _Update,
		about: _About,
	};

	const shownParameter: vue.Ref<Parameter> = vue.ref('themes');

	const formatParameterTitle = (parameter: Parameter) => {
		return parameter.charAt(0).toUpperCase() + parameter.slice(1);
	};

	const formatParameterHashtag = (parameter: Parameter) => {
		return `#${parameter}`;
	};

	const goToParameter = (targetParameter: Parameter) => {
		shownParameter.value = targetParameter;
	};

	const Parameter = vue.computed(() => {
		return parameters[shownParameter.value];
	});

	return {
		parameters,
		shownParameter,
		formatParameterTitle,
		formatParameterHashtag,
		goToParameter,
		Parameter,
	};
});
