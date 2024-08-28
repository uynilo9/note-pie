<script lang="ts" setup>
	import Button from '@components/Button.vue';

	import * as store from '@store/stores';
	const noteStore = store.useNoteStore();
</script>
<template>
	<div
		v-if="!noteStore.noNoteData"
		class="
			max-h-inherit flex flex-col gap-1.5 overflow-auto
			*:px-2 *:py-2 *:w-full *:h-17.5 *:flex *:flex-col *:text-light-500 *:rounded-md
			*:transition-colors *:duration-200 *:ease-in-out *:cursor-pointer [&>*:hover]:hover:bg-zinc-600/50
		"
	>
		<div
			v-for="note in noteStore.orderedNoteList"
			class="*:my-auto *:select-none"
			:class="note.info.id === noteStore.shownNoteId ? 'bg-zinc-600/50' : ''"
			@click="noteStore.selectNote(note.info.id)"
		>
			<b class="text-4 truncate">{{ note.info.title }}</b>
			<div class="flex flex-row justify-between">
				<p class="text-3">{{ note.info.formattedEditedTime }}</p>
				<Button
					v-if="note.info.isPinned"
					icon="list-icon-note-pinned"
					title="Unpin"
					@click="note.info.isPinned = false"
				/>
				<Button
					v-else
					icon="list-icon-note-not-pinned"
					title="Pin"
					@click="note.info.isPinned = true"
				/>
			</div>
		</div>
	</div>
	<div
		v-else
		class="flex text-3.5 text-gray-400/75 select-none"
	>
		<div class="text-4.5 list-icon-arrow-up"></div>
		<p>Take a new note</p>
	</div>
</template>
