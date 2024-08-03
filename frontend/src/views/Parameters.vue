<script lang="ts" setup>
	import Layout from '@layouts/Layout.vue';
	import Menu from '@components/parameters/Menu.vue';

	import * as store from '@store/stores';
	const parameterStore = store.useParameterStore();
</script>
<template>
	<Layout>
		<template #sidebar>
			<Menu />
		</template>
		<template #content>
			<parameterStore.Parameter />
		</template>
	</Layout>
</template>
