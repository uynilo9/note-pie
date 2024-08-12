<script lang="ts" setup>
	import * as store from '@store/stores';
	const parameterStore = store.useParameterStore();
</script>
<template>
	<div class="h-full flex flex-col gap-2.5 items-center">
		<a
			v-for="_, parameter in parameterStore.parameters"
			class="text-4 no-underline transition-colors duration-250 ease-in-out cursor-pointer"
			:href="parameterStore.formatParameterHashtag(parameter)"
			:class="parameter === parameterStore.shownParameter ? 'text-light-500 pointer-events-none' : 'text-gray-400/75 hover:text-light-500'"
			@click="parameterStore.goToParameter(parameter)"
		>{{ parameterStore.formatParameterTitle(parameter) }}</a>
	</div>
</template>
