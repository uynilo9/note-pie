<script lang="ts" setup>
	import * as store from '@store/stores';
	const sidebarStore = store.useSidebarStore();
</script>
<template>
	<div
		class="px-2.5 h-full overflow-scroll transition-[w] duration-400 ease-in-out"
		:class="sidebarStore.isSidebarClosed ? 'w-9' : 'w-70'"
	>
		<div
			class="h-inherit transition-opacity ease-in-out"
			:class="sidebarStore.isSidebarClosed ? 'opacity-0 duration-100 pointer-events-none' : 'opacity-100 delay-200 duration-200'"
		>
			<slot></slot>
		</div>
		<div class="absolute w-inherit h-8 flex inset-l-0 inset-b-0">
			<div
				class="
					my-auto px-2
					*:text-5 *:text-gray-500 *:transition-colors *:duration-250 *:ease-in-out *:cursor-pointer *:hover:text-light-500
				"
				@click="sidebarStore.toggleSidebar()"
			>
				<div
					v-if="sidebarStore.isSidebarClosed"
					title="Open"
					class="footer-icon-open-sidebar"
				></div>
				<div
					v-else
					title="Close"
					class="footer-icon-close-sidebar"
				></div>
			</div>
		</div>
	</div>
</template>
