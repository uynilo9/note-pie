<script lang="ts" setup>
	import * as store from '@store/stores';
	const navbarStore = store.useNavbarStore();
</script>
<template>
	<div
		class="mt-8 px-5 flex-1 w-full bg-dark-700/50 border-l-solid border-l-gray-500/5 overflow-scroll"
		:class="!navbarStore.isWindowMaximised ? 'rounded-br-[10px]' : ''"
	>
		<slot></slot>
	</div>
</template>
