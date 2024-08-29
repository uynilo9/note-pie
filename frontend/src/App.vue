<script lang="ts" setup>
	import Navbar from '@components/Navbar.vue';
	import { RouterView as View } from 'vue-router';
</script>
<template>
	<Navbar />
	<View />
</template>
<style lang="sass">
	*
		margin: 0
		padding: 0
		box-sizing: border-box
		font-family: 'Quicksand', sans-serif

		::-webkit-scrollbar
			display: none

	body
		background: rgba(40, 40, 40, 0.75)
</style>
