<script lang="ts" setup>
	import Button from '@components/Button.vue';

	import * as store from '@store/stores';
	const noteStore = store.useNoteStore();
</script>
<template>
	<div class="
		max-h-inherit flex flex-col gap-1.5 overflow-auto
		*:px-2.5 *:py-2 *:w-full *:h-17.5 *:flex *:flex-col *:text-light-500 *:rounded-md
		*:transition-colors *:duration-200 *:ease-in-out *:cursor-pointer [&>*:hover]:hover:bg-zinc-600/50
	">
		<div
			v-for="note in noteStore.orderedNoteList"
			class="*:my-auto *:select-none"
			:class="note.info.rawIndex === noteStore.selectedNoteRawIndex ? 'bg-zinc-600/50' : ''"
			@click="noteStore.selectNote(note.info.rawIndex)"
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
</template>
