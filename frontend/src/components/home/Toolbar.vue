<script lang="ts" setup>
	import Button from '@components/Button.vue';

	import * as store from '@store/stores';
	const noteStore = store.useNoteStore();
	const sidebarStore = store.useSidebarStore();
</script>
<template>
	<div
		class="
			absolute my-1 px-2.5 h-5 flex inset-0 inset-t-8 justify-between transition-[w] duration-400
			*:flex *:select-none
		"
		:class="sidebarStore.isSidebarClosed ? 'w-9' : 'w-70'"
	>
		<div>
			<Button
				icon="sidebar-icon-new-note"
				title="New"
				@click="noteStore.newNote()"
			/>
		</div>
		<div
			class="gap-1.5"
			:class="noteStore.noNoteData || noteStore.noShownNote ? '*:text-gray-50/25 *:pointer-events-none' : ''"
		>
			<Button
				icon="sidebar-icon-duplicate-note"
				title="Duplicate"
				@click="noteStore.duplicateNote()"
			/>
			<Button
				icon="sidebar-icon-delete-note"
				title="Delete"
				@click="noteStore.deleteNote()"
			/>
		</div>
	</div>
</template>
