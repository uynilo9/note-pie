<script lang="ts" setup>
	import * as store from '@store/stores';
	const navbarStore = store.useNavbarStore();

	import Navbar from '@components/Navbar.vue';
	import { RouterView as View } from 'vue-router';
</script>
<template>
	<div
		class="bg-[#282828bf]"
		:class="!navbarStore.isWindowMaximised ? 'rounded-[10px]' : ''"
	>
		<Navbar />
		<View />
	</div>
</template>
<style lang="sass">
	*
		margin: 0
		padding: 0
		box-sizing: border-box
		font-family: 'Quicksand', sans-serif

		::-webkit-scrollbar
			display: none
</style>
