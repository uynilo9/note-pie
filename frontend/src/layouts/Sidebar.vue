<script lang="ts" setup>
	import Footer from '@components/Footer.vue';
	import Toolbar from '@components/home/Toolbar.vue';

	import * as store from '@store/stores';
	const pageStore = store.usePageStore();
	const sidebarStore = store.useSidebarStore();
</script>
<template>
	<div
		class="mt-15 mb-8 px-2.5 max-h-[100vh-2rem] overflow-scroll transition-[w] duration-400 ease-in-out"
		:class="sidebarStore.isSidebarClosed ? 'w-9' : 'w-70'"
	>
		<div
			class="transition-opacity ease-in-out"
			:class="sidebarStore.isSidebarClosed ? 'opacity-0 duration-150 pointer-events-none' : 'opacity-100 delay-100 duration-250'"
		>
			<Toolbar
				class="transition-[w] duration-400"
				v-if="pageStore.shownPage === 'note-pie'"
				:class="sidebarStore.isSidebarClosed ? 'w-9' : 'w-70'"
			/>
			<slot></slot>
		</div>
		<Footer />
	</div>
</template>
