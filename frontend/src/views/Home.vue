<script lang="ts" setup>
	import Layout from '@layouts/Layout.vue';
	import Toolbar from '@components/home/Toolbar.vue';
	import List from '@components/home/List.vue';
	import Editor from '@components/home/Editor.vue';
</script>
<template>
	<Layout>
		<template #sidebar>
			<Toolbar />
			<List />
		</template>
		<template #content>
			<Editor />
		</template>
	</Layout>
</template>
