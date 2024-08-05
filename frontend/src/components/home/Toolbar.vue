<script lang="ts" setup>
	import Button from '@components/Button.vue';

	import * as vue from 'vue';
	// TODO: Use store here
	const foldername = vue.ref('foo');
</script>
<template>
	<div class="absolute my-1 px-3 h-2 flex inset-0 inset-t-8 justify-between">
		<div class="flex gap-1 text-gray-400 select-none">
			<div
				title="Directory"
				class="sidebar-icon-directory text-4.5"
			></div>
			<p
				class="text-3.5"
				:title="foldername"
				>{{ foldername }}</p
			>
		</div>
		<div class="flex gap-1.5">
			<Button
				icon="sidebar-icon-new-note"
				title="New"
			/>
			<Button
				icon="sidebar-icon-duplicate-note"
				title="Duplicate"
			/>
			<Button
				icon="sidebar-icon-delete-note"
				title="Delete"
			/>
			<Button
				icon="sidebar-icon-open-folder"
				title="Open"
			/>
		</div>
	</div>
</template>
