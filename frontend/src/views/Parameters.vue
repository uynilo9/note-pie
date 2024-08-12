<script lang="ts" setup>
	import Layout from '@layouts/Layout.vue';
	import Sidebar from '@layouts/Sidebar.vue';
	import Content from '@layouts/Content.vue';

	import Menu from '@components/parameters/Menu.vue';

	import * as store from '@store/stores';
	const parameterStore = store.useParameterStore();
</script>
<template>
	<Layout>
		<Sidebar>
			<Menu />
		</Sidebar>
		<Content>
			<parameterStore.Parameter
				class="text-light"
			/>
		</Content>
	</Layout>
</template>
