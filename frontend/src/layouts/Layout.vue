<script lang="ts" setup>
	import Navbar from '@components/Navbar.vue';
	import Sidebar from '@layouts/Sidebar.vue';
	import Content from '@layouts/Content.vue';
</script>
<template>
	<Navbar />
	<div
		class="
			flex flex-row h-screen
			*:py-8
		"
	>
		<Sidebar>
			<slot name="sidebar"></slot>
		</Sidebar>
		<Content>
			<slot name="content"></slot>
		</Content>
	</div>
</template>
