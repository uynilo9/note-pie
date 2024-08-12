<script lang="ts" setup>
	import Layout from '@layouts/Layout.vue';
	import Sidebar from '@layouts/Sidebar.vue';
	import Content from '@layouts/Content.vue';

	import Toolbar from '@components/home/Toolbar.vue';
	import List from '@components/home/List.vue';
	import Editor from '@components/home/Editor.vue';
</script>
<template>
	<Layout>
		<Sidebar>
			<Toolbar />
			<List />
		</Sidebar>
		<Content>
			<Editor />
		</Content>
	</Layout>
</template>
